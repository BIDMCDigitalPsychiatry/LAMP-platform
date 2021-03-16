library(Rcpp)
library(mvtnorm)
library(Matrix)

Rcpp::sourceCpp('TSDecompositionMissing.cpp')
MDYtoYMD = function(s){
  temp=strsplit(s,"/")[[1]]
  return(paste(temp[3],temp[1],temp[2],sep="-"))
}

DecomposeErrors = function(y,times=NULL,dft=2,tscale=10,mintotvals=7,minvaleach=2,onesided=FALSE,buffer=.2){
  if(is.null(times)){
    times = 1:length(y)
  }
  rt=range(times,na.rm=T)
  tscale = (rt[2]-rt[1])/tscale
  mu_v=DecomposeErrorsMu(y,times,dft,tscale,onesided,buffer)
  s_v=DecomposeErrorsWeeklySeasonality(y-mu_v,times,mintotvals,minvaleach)
  eps_v=y-(mu_v+s_v)
  return(list(y=y,mu=mu_v,s=s_v,eps=eps_v))
}

AnomalyDetectionTS = function(mat,B=1000,onesided=F,nonparam=T,ALPHA=0.05){
  epsmat = matrix(NA,nrow=nrow(mat),ncol=ncol(mat))
  for(i in 1:nrow(epsmat)){
    epsmat[i,]=DecomposeErrors(mat[i,],onesided=onesided)$eps
  }
  minp_v = MinpDistribution(epsmat,B,nonparam)
  x=HotellingsTS(epsmat,TRUE)
  cutoff=min(ALPHA,quantile(minp_v,ALPHA))
  IDanomaly=which(x[3,]<cutoff)
  return(list('IDanomaly'=IDanomaly,'cutoff'=cutoff,'epsmat'=epsmat,'output'=x,'minp_v'=minp_v))
}

AnomalyDetectionPlot = function(homedir,filename,ID,Nsurveys,outfiletag="",NoSurvey=FALSE,vertmarks=NULL){
  Nmobfeats=15
  dat = read.table(paste(homedir,"Processed_data",filename,sep="/"),header=T,stringsAsFactors=F)
  rIDs=which(dat$IID==ID)
  y = dat[rIDs,]
  outdir=paste(homedir,"Output",ID,sep="/")
  if(!file.exists(outdir)){
    dir.create(outdir)
  }  
  if(nrow(y)<4){
    cat(" Not enough data")
    return(NULL)
  }
  y = y[c(-1,-nrow(y)),]
  fvar=apply(y[,3:ncol(y)],2,function(xx) var(xx,na.rm=T))
  fext=apply(y[,3:ncol(y)],2,function(xx) length(which(!is.na(xx))))
  IDrm=unique(c(which(is.na(fvar)),which(fvar==0),which(fext<3)))+2
  Nsurvrm=length(which(IDrm<=Nsurveys+2))
  Nmobrm=length(which(IDrm<=Nmobfeats+Nsurveys+2))-Nsurvrm
  Nsocfeats=ncol(y)-Nmobfeats-Nsurveys-2-(length(IDrm)-Nsurvrm-Nmobrm)
  Nsurveys=Nsurveys-Nsurvrm
  Nmobfeats=Nmobfeats-Nmobrm
  if(length(IDrm)>0){
    y = y[,-IDrm]
  }
  if(Nsocfeats+Nsurveys+Nmobfeats==0){
    cat(" Not enough data")
    return(NULL)
  }
  for(i in 1:3){
    if(i==1){
      if(NoSurvey || Nsurveys==0){next}
      out=AnomalyDetectionTS(t(data.matrix(y[,3:(3+Nsurveys-1)])),B=1000); DTYPE="Surveys" #surveys only
    }else if(i==2){
      if(Nmobfeats==0){next}
      out=AnomalyDetectionTS(t(data.matrix(y[,(3+Nsurveys):(3+Nsurveys+Nmobfeats-1)])),B=1000); DTYPE="Mobility" #mobility only
    }else{
      if(Nsocfeats==0){next}
      out=AnomalyDetectionTS(t(data.matrix(y[,(3+Nsurveys+Nmobfeats):ncol(y)])),B=1000); DTYPE="Sociability" #sociability only
    }
    png(paste(homedir,"Output",ID,paste("AnomalyDetection",DTYPE,"-",outfiletag,"-",ID,".png",sep=""),sep="/"),width=6,height=5,units="in",res=300)
    par(mai=c(1,.6,.4,.1))
    par(mgp=c(1.7,.6,0))
    plot(as.numeric(as.POSIXct(y[,2])),-log10(out$output[3,]),xaxt="n",xlab="",ylab=expression(-log[10](p)),pch=16,main=paste("Anomaly Detection: ",DTYPE,sep=""))
    LocTck=seq(min(as.numeric(as.POSIXct(y[,2]))),max(as.numeric(as.POSIXct(y[,2]))),3600*24*7)
    axis(1,at=LocTck,labels=unlist(lapply(strsplit(as.character(as.POSIXct(LocTck,origin="1970-01-01")),split=" "),function(xx) xx[1])),las=2)
    #lines(rep(as.numeric(as.POSIXct(y[IDhosp,2])),2),c(-10,10),col="Red")
    if(!is.null(vertmarks)){
      for(j in 1:length(vertmarks)){
        lines(rep(as.numeric(as.POSIXct(vertmarks[j],origin="1970-01-01")),2),c(-10,10),col="Red")
      }
    }
    lines(range(as.numeric(as.POSIXct(y[,2])))+c(-1000000,1000000),rep(-log10(out$cutoff),2),lty=2)
    dev.off()
  }
}
