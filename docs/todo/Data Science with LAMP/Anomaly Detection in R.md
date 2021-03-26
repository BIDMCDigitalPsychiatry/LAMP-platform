---
title: Anomaly Detection in R
slug: anomaly_detection_r
---

Code originally written in 2017 by [Ian Barnett, PhD](mailto:ibarnett@pennmedicine.upenn.edu), and modified and maintained by the [Division of Digital Psychiatry](mailto:team@digitalpsych.org).

### 1. Add the following to working directory

[TSDecompositionMissing.cpp](../Topics/Anomaly Detection in R/TSDecompositionMissing.cpp)

[TSAnomalyDetection.R](../Topics/Anomaly Detection in R/TSAnomalyDetection.r)

### 2. Setup and source files

```r
library(Rcpp)
library(mvtnorm)
library(Matrix)

# Make sure you have the following files in the working directory
# TSAnomalyDetection.R
# TSDecompositionMissing.cpp

# Source TSAnomalyDetection
source('TSAnomalyDetection.R')

### set the following user parameters:
## 1) output_filepath: directory containing the code as well as therds file
## 2) name of the patientinfo file
## 3) name of the rds file containing daily digital phenotypes

output_filepath="PATH-OF-WORKING-DIRECTORY"

patient_names <- c("PARTICIPANT-IDS")

# Input feature matrix should have the columns
# IID, Date, Feature-1-A, Feature-2-B, Feature 3-A, Feature-3-B, ...
infilename=paste("INPUT-FEATURE-MATRIX-RDS",sep="")
infilepath=paste(output_filepath,infilename,sep="/")

# Need to inform the anomaly detection method what the features are and how many columns for each
# Make sure these are in the right order
features <- data.frame(feature_categories = c("Feature 1","Feature 2"),
                       feature_lengths = c(2, 2), 
                       stringsAsFactors = F)
```

### 3. Define main anomaly detection function

```r
anomaly_detection_plot = function(ID, features = NULL, onesided=TRUE) {

  infilepath=paste(output_filepath,infilename,sep="/")
  if (!file.exists(infilepath)) {
    cat("Data filepath does not exist.")
    return(NULL)
  } else if (is.null(features)) {
    cat("No feature information provided.")
    return(NULL)
  }
  
  dat = readRDS(infilepath)
  
  ## Need to convert NaN to NA or Hotelling's 
  ## method will fail. This "Method Dispatch"
  ## solves the issue in 3 lines
  is.nan.data.frame <- function(x)
    do.call(cbind, lapply(x, is.nan))
  
  dat[is.nan(dat)] <- NA
  
  outmat = matrix(NA,nrow=nrow(dat),ncol=18)
  rIDs=which(dat$IID==ID)
  y = dat[rIDs,]
  if(nrow(y)<4) {
    cat(" Not enough data for anomaly detection.")
    return(NULL)
  }
  y = y[c(-1,-nrow(y)),]
  fvar=apply(y[,3:ncol(y)],2,function(xx) var(xx,na.rm=T))
  fext=apply(y[,3:ncol(y)],2,function(xx) length(which(!is.na(xx))))
  
  # Remove individual features for which there is no data
  IDrm=unique(c(which(is.na(fvar)),which(fvar==0),which(fext<3)))+2
  features$rm = NA
  features$feats = NA
  for (i in 1:length(features$feature_categories)) {
    rm_comp <- ifelse(i==1, 0, sum(features$rm[1:(i-1)], na.rm = T))
    features$rm[i] <- length(which(IDrm<=sum(features$feature_lengths[1:i], na.rm=T)+2)) - rm_comp
    features$feats[i] <- features$feature_lengths[i] - features$rm[i]
  }
  
  if(length(IDrm)>0){
    y = y[,-IDrm]
  }
  
  if(sum(features$feats, na.rm=T)==0){
    cat(" Not enough data for anomaly detection.")
    return(NULL)
  }
  
# Perform anomaly detection on each of the feature groups
  for(i in 1:length(features$feature_categories)){
    if(features$feats[i] == 0) {next}
    idx <- ifelse(i == 1, 0, sum(features$feats[1:(i-1)], na.rm=T))
    out=AnomalyDetectionTS(t(data.matrix(y[,(3 + idx):(3+sum(features$feats[1:i], na.rm = T)-1)])),B=1000,onesided)
    outmat[rIDs[c(-1,-length(rIDs))],((3*i)-2)] = out$output[1,]
    outmat[rIDs[c(-1,-length(rIDs))],((3*i)-1)] = out$output[2,]
    outmat[rIDs[c(-1,-length(rIDs))],(3*i)] = out$output[3,]
  }
  return(list(outmat,rIDs))
}
```

### 4. Run anomaly detection on each participant

```r
featanom = readRDS(infilepath)
new_cols <- c()

# Append new columns to hold anomaly detection output
for (i in 1:length(features$feature_categories)) {
  new_cols <- c(new_cols, paste(features$feature_categories[i], "_stat", sep=""))
  new_cols <- c(new_cols, paste(features$feature_categories[i], "_df", sep=""))
  new_cols <- c(new_cols, paste(features$feature_categories[i], "_pval", sep=""))
}

newcolnames=c(names(featanom),new_cols)
featanom = cbind(featanom,matrix(NA,nrow=nrow(featanom),ncol=length(new_cols)))
colnames(featanom)=newcolnames

cat("\nPerforming anomaly detection for ",length(patient_names),"subjects:\n\n")
for(i in 1:length(patient_names)){
  cat(paste("ID: ",patient_names[i]," (",i,"/",length(patient_names),")\n",sep=""))
  out=anomaly_detection_plot(ID=patient_names[i], features = features, onesided=TRUE)
  rIDs = out[[2]]
  if(!is.null(rIDs) && length(rIDs)>3){
    outmat=out[[1]]
    featanom[rIDs[c(-1,-2,-length(rIDs))],((ncol(featanom)-(length(new_cols)-1)):ncol(featanom))]=outmat[rIDs[c(-1,-2,-length(rIDs))],]
  }
}

# View output
head(featanom)
```

---

**Was there something we didn't cover, or need more help?**
Let us know by making a post in the [LAMP Community](https://community.lamp.digital/), or [contact us directly](mailto:team@digitalpsych.org). Thank you for your contribution! 🌟
*Page last updated on July 3rd, 2020.*
