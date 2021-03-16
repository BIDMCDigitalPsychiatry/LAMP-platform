#include <RcppArmadillo.h>
#include <Rcpp.h>
#include <math.h>
using namespace Rcpp;
// [[Rcpp::depends(RcppArmadillo)]]



// [[Rcpp::export]]
arma::mat NormaliseRowsWithNAs(arma::mat mat){
  int I = mat.n_rows;
  int J = mat.n_cols;
  double rmean;
  double rvar;
  double rsd;
  int nvals;
  for(int i=0;i<I;++i){
    rmean=0;
    nvals=0;
    for(int j=0;j<J;++j){
      if(!R_IsNA(mat(i,j))){
        rmean+=mat(i,j);
        ++nvals;
      }
    }
    if(nvals==0){
      break;
    }
    rmean = rmean/nvals;
    rvar = 0;
    for(int j=0;j<J;++j){
      if(!R_IsNA(mat(i,j))){
        mat(i,j)=mat(i,j)-rmean;
        rvar =rvar+pow(mat(i,j),2);
      }
    }
    rsd = pow((rvar/nvals),.5);
    if(nvals>1){
      for(int j=0;j<J;++j){
        if(!R_IsNA(mat(i,j))){
          mat(i,j)=mat(i,j)/rsd;
        }
      }
    }
  }
  return mat;
}

arma::vec LargestResiduals(arma::mat mat){
  int I = mat.n_rows;
  int J = mat.n_cols;
  double rmean;
  double rvar;
  double rsd;
  double mrsd;
  arma::vec lrsd(J);
  int nvals;
  for(int i=0;i<I;++i){
    rmean=0;
    nvals=0;
    for(int j=0;j<J;++j){
      if(!R_IsNA(mat(i,j))){
        rmean+=mat(i,j);
        ++nvals;
      }
    }
    if(nvals==0){
      break;
    }
    rmean = rmean/nvals;
    rvar = 0;
    for(int j=0;j<J;++j){
      if(!R_IsNA(mat(i,j))){
        mat(i,j)=mat(i,j)-rmean;
        rvar =rvar+pow(mat(i,j),2);
      }
    }
    rsd = pow((rvar/nvals),.5);
    if(nvals>1){
      for(int j=0;j<J;++j){
        if(!R_IsNA(mat(i,j))){
          mat(i,j)=mat(i,j)/rsd;
        }
      }
    }
  }
  
  // The largest fabs(mat(i,j)) per column, 
  // the largest residual a.k.a. distance
  // from the mean for that feature (row)
  for(int j=0;j<J;++j) {
    mrsd=mat(0,j);
    lrsd(j)=0;
    for(int i=0; i<I; ++i) {
      if (fabs(mat(i,j)) > mrsd) {
        mrsd=fabs(mat(i,j));
        lrsd(j)=i;
      }
    }
  }
  return lrsd;
}



// [[Rcpp::export]]
arma::mat RowRankMat(arma::mat mat,bool nquantiles){
  int I = mat.n_rows;
  int J = mat.n_cols;
  int nvals;
  int counter;
  for(int i=0;i<I;++i){
    nvals=0;
    counter=0;
    for(int j=0;j<J;++j){
      if(!R_IsNA(mat(i,j))){
        ++nvals;
      }
    }
    if(nvals==0){
      break;
    }
    arma::vec inds(nvals);
    arma::vec vals(nvals);
    for(int j=0;j<J;++j){
      if(!R_IsNA(mat(i,j))){
        inds(counter)=j;
        vals(counter)=mat(i,j);
        ++counter;
      }
    }
    arma::vec ranks = arma::conv_to<arma::vec>::from(arma::sort_index(vals));
    for(int j=0;j<nvals;++j){
      if(nquantiles){
        mat(i,inds(ranks(j)))=R::qnorm((j+1.0)/(nvals+1),0.0,1.0,true,false);
      }else{
        mat(i,inds(ranks(j)))=j;
      }
    }
  }  
  return mat;
}

// [[Rcpp::export]]
arma::mat nearPDsym(arma::mat mtx){
  arma::vec eigval;
  arma::mat eigvec;
  arma::eig_sym(eigval,eigvec,mtx);
  int len = eigval.size();
  double delta = .01/len;
  for(int i=0;i<len;++i){
    if(eigval(i)<delta){
      eigval(i)=delta;
    }
  }
  arma::mat pdmat= eigvec*(arma::diagmat(eigval))*trans(eigvec);
  arma::mat dvdmat=arma::diagmat(1/sqrt(arma::diagmat(pdmat)));
  return dvdmat*pdmat*dvdmat;
}


// [[Rcpp::export]]
arma::vec IndsToKeepForPD(arma::mat subcormat,arma::vec inds,arma::vec datamnt){
  // inds contains the indices of the full variable set that are in subcormat.
  // datamnt is a vector of length equal to the length of the full variable set
  // that contains the number of non-NA values in the each variable.
  double MAXCORALLOWED = .9;
  int n = subcormat.n_rows;
  int n2;
  int counter;
  int indi;
  int indj;
  int imax;
  int jmax;
  double maxval;
  arma::vec inds2;
  arma::vec indskeep;
  indskeep.set_size(n);
  indskeep.fill(1);
  arma::vec eigval;
  arma::mat eigvec;
  arma::mat subcormat2;
  while(true){
    n2=sum(indskeep);
    inds2.set_size(n2);
    counter=0;
    for(int i=0;i<n;++i){
      if(indskeep(i)==1){
        inds2(counter)=i;
        ++counter;
      }
    }
    if(n2==1){
      break;
    }
    subcormat2.reshape(n2,n2);
    indi=0;
    for(int i=0;i<n;++i){
      if(indskeep(i)==1){
        indj=0;
        for(int j=0;j<n;++j){
          if(indskeep(j)==1){
            subcormat2(indi,indj)=subcormat(i,j);
            ++indj;
          }
        }
        ++indi;
      }
    }
    arma::eig_sym(eigval,eigvec,subcormat2);
    double delta = 0.01/n;
    arma::vec tempdiag = subcormat2.diag();
    arma::mat tempmat = abs(subcormat2-arma::diagmat(tempdiag));
    imax=0;
    jmax=0;
    maxval=0;
    for(int i=0;i<n2-1;++i){
      for(int j=i+1;j<n2;++j){
        if(tempmat(i,j)>maxval){
          maxval = tempmat(i,j);
          imax=i;
          jmax=j;
        }
      }
    }
    if(eigval.min()>delta && maxval<MAXCORALLOWED){
      break;
    }
    if(datamnt(inds(inds2(imax)))<datamnt(inds(inds2(jmax)))){
      indskeep(inds2(imax))=0;
    }else{
      indskeep(inds2(jmax))=0;
    }
  }
  return inds2;
}


// [[Rcpp::export]]
arma::mat HotellingsTS(arma::mat epsmat,bool nonparam){
  arma::mat inputMat=epsmat;
  if(nonparam){
    epsmat = RowRankMat(epsmat,true);
  }
  arma::mat epsnmat = NormaliseRowsWithNAs(epsmat);
  int I = epsnmat.n_rows;
  int J = epsnmat.n_cols;
  arma::vec datamnt(I);
  datamnt.fill(0);
  for(int i=0;i<I;++i){
    for(int j=0;j<J;++j){
      if(!R_IsNA(epsnmat(i,j))){
        ++datamnt(i);
      }
    }
  }
  double csum;
  int nvals;
  int nvals2;
  arma::mat cormat; // populate cormat with correlations between rows, removing NAs in each case
  cormat.reshape(I,I);
  cormat.fill(1);
  for(int i1=0;i1<I-1;++i1){
    for(int i2=i1+1;i2<I;++i2){
      csum=0;
      nvals=0;
      for(int j=0;j<J;++j){
        if(!R_IsNA(epsnmat(i1,j)) && !R_IsNA(epsnmat(i2,j))){
          ++nvals;
          csum=csum+epsnmat(i1,j)*epsnmat(i2,j);
        }
      }
      if(nvals==0){
        cormat(i1,i2)=NA_REAL;
        cormat(i2,i1)=NA_REAL;
      }else{
        csum=csum/nvals;
        cormat(i1,i2)=csum;
        cormat(i2,i1)=csum;
      }
    }
  }
  // Calculate Hotelling's for each column, using only the subset of rows containing non-NA
  // values in each case. (t(column) %*% \Sigma^{-1} %*% column)/(nrows-# NAs in column)
  arma::mat subcormat;
  arma::mat subvec;
  arma::mat subcormat2;
  arma::mat subvec2;
  arma::vec Hstat(J);
  arma::vec pvals(J);
  arma::vec DF(J);
  arma::mat temp;
  int counter;
  for(int j=0;j<J;++j){
    nvals=0;
    for(int i=0;i<I;++i){
      if(!R_IsNA(epsnmat(i,j))){
        ++nvals;
      }
    }
    if(nvals==0){
      Hstat(j)=NA_REAL;
      pvals(j)=NA_REAL;
      DF(j)=0;
    }else if(nvals==1){
      for(int i=0;i<I;++i){
        if(!R_IsNA(epsnmat(i,j))){
          Hstat(j)=pow(epsnmat(i,j),2);
          DF(j)=1;
          pvals(j)=R::pchisq(Hstat(j),DF(j),false,false);
          break;
        }
      }
    }else{
      subcormat.reshape(nvals,nvals);
      subcormat.fill(1);
      subvec.reshape(nvals,1);
      counter=0;
      arma::vec inds(nvals);
      for(int i=0;i<I;++i){
        if(!R_IsNA(epsnmat(i,j))){
          subvec(counter,0)=epsnmat(i,j);
          inds(counter)=i;
          ++counter;
        }
      }
      for(int i1=0;i1<nvals-1;++i1){
        for(int i2=i1+1;i2<nvals;++i2){
          subcormat(i1,i2)=cormat(inds(i1),inds(i2));
          subcormat(i2,i1)=subcormat(i1,i2);
        }
      }
      // Check to see if subcormat has small eigenvalues (less than some delta)
      // Do this by removing variables in highly correlated pairs with little data.
      arma::vec indskeep = IndsToKeepForPD(subcormat,inds,datamnt);
      nvals2=indskeep.size();
      subcormat2.reshape(nvals2,nvals2);
      subvec2.reshape(nvals2,1);
      for(int i1=0;i1<nvals2;++i1){
        subvec2(i1,0)=subvec(indskeep(i1),0);
        for(int j1=0;j1<nvals2;++j1){
          subcormat2(i1,j1)=subcormat(indskeep(i1),indskeep(j1));
        }
      }
      temp = (trans(subvec2) * inv(subcormat2) * subvec2);
      Hstat(j)= temp(0,0);
      DF(j)=nvals2;
      pvals(j)=R::pchisq(Hstat(j),DF(j),false,false);
    }
  }
  arma::mat outmat;
  outmat.reshape(4,J);
  outmat.row(0)=trans(Hstat);
  outmat.row(1)=trans(DF);
  outmat.row(2)=trans(pvals);
  outmat.row(3)=trans(LargestResiduals(inputMat));
  return outmat;
}


// [[Rcpp::export]]
arma::vec MinpDistribution(arma::mat dat,int B,bool nonparam){
  int I=dat.n_rows;
  int J=dat.n_cols;
  Rcpp::List rowinds(I);
  for(int i=0;i<I;++i){
    rowinds[i]=arma::conv_to<arma::vec>::from(arma::find_finite(dat.row(i)));
  }
  arma::mat matrperm;
  arma::mat output;
  matrperm.reshape(I,J);
  matrperm.fill(NA_REAL);
  arma::vec minpv(B);
  for(int b=0;b<B;++b){
    for(int i=0;i<I;++i){
      arma::vec tempv = rowinds[i];
      int vlen = tempv.size();
      arma::vec tempv2 = arma::conv_to<arma::vec>::from(dat.row(i));
      arma::vec tempv3(vlen);
      for(int k=0;k<vlen;++k){
        tempv3(k) = tempv2(tempv(k));
      }
      arma::vec rowshuf = arma::shuffle(tempv3);
      for(int k=0;k<vlen;++k){
        matrperm(i,tempv(k))=rowshuf(k);
      }
    }
    output=HotellingsTS(matrperm,nonparam);
    minpv(b)=min(output.row(2));
  }
  return minpv;
}


// [[Rcpp::export]]
NumericVector DecomposeErrorsMu(NumericVector y, NumericVector t, double df, double tscale,bool onesided, double buffer){
  int m = y.size();
  double wsum;
  double tot;
  double w;
  NumericVector mu(m);
  for(int i=0;i<m;++i){
    if(!R_IsNA(y[i])){
      wsum=0;
      tot=0;
      for(int j=0;j<m;++j){
        if(i!=j && !R_IsNA(y[j])){
          if(onesided && wsum>0 && i>buffer*m&& t[i]<=t[j]){
            w = 0;
          }else{
            w = R::dt((t[i]-t[j])/tscale,df,0);
          }
          wsum += w;
          tot += w*y[j];
        }
      }
      mu[i]=tot/wsum;
    }else{
      mu[i]=NA_REAL;
    }
  }
  return mu;
}



// [[Rcpp::export]]
NumericVector DecomposeErrorsWeeklySeasonality(NumericVector y, NumericVector t, int mintotvals, int minvaleach){
  int m = y.size();
  int mc = 0;
  NumericVector isNA(m);
  NumericVector snull(m);
  for(int i=0;i<m;++i){
    if(R_IsNA(y[i])){
      isNA[i]=1;
      snull[i]=NA_REAL;
    }else{
      isNA[i]=0;
      snull[i]=0;
      mc+=1;
    }
  }
  // check for sufficient total data 
  if(mc<mintotvals){
    return snull;
  }
  // create reduced vectors for y and t containing only complete values 
  NumericVector yc(mc);
  NumericVector tc(mc);
  NumericVector tcmod(mc);
  NumericVector tccount(7);
  int counter=0;
  for(int i=0;i<m;++i){
    if(isNA[i]==0){
      yc[counter]=y[i];
      tc[counter]=t[i];
      tcmod[counter]=int(t[i])%7;
      tccount[int(t[i])%7]+=1;
      counter+=1;
    }
  }
  // check for sufficient days 
  if(min(tccount)<=minvaleach){
    return snull;
  }
  arma::mat E; // initialized to 0
  E.reshape(mc,6);
  E.fill(0);
  for(int i=0;i<mc;++i){
    if(int(tc[i])%7==6){
      for(int j=0;j<6;++j){
        E(i,j)=-1;
      }
    }else{
      E(i,int(tc[i])%7)=1;
    }
  }
  arma::mat tE = E.t();
  arma::vec yca = yc;
  arma::mat shat=inv(tE*E)*tE*yca;
  NumericVector sout(m);
  double lastval=0;
  for(int i=0;i<6;++i){
    lastval+=-shat(i,0);
  }
  for(int i=0;i<m;++i){
    if(isNA[i]){
      sout[i]=NA_REAL;
    }else{
      if(int(t[i])%7==6){
        sout[i]=lastval;
      }else{
        sout[i]=shat(int(t[i])%7,0);      
      }
    }
  }
  return sout; 
}




// /*** R
// #DecomposeErrorsWeeklySeasonality(rnorm(100),1:100,2,5)
// #HotellingsTS(rbind(0:4,0:4),TRUE)
// #missprob=.2
// #mvndat = t(rmvnorm(10,mean=c(0,0),sigma=rbind(c(1,.2),c(.2,1))))
// #mvndat[sample(1:length(mvndat),floor(length(mvndat)*missprob))]=NA
// #epsmat = matrix(NA,nrow=nrow(mvndat),ncol=ncol(mvndat))
// #for(i in 1:nrow(epsmat)){
//   #epsmat[i,]=DecomposeErrors(mvndat[i,],onesided=FALSE)$eps
// #}
// #minp_v = MinpDistribution(epsmat,1,TRUE)
// #hist(minp_v,breaks=40)
// */

/*** R
*/