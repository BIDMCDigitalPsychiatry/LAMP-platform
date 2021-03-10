FROM codercom/code-server:3.7.4
USER root

# Install Debian testing repository sources and Docker CLI
# Install Apt packages (R + Tidyverse, Python, NodeJS)
RUN \
  echo 'deb http://http.us.debian.org/debian/ testing non-free contrib main' >> /etc/apt/sources.list && \
  apt-get update -y && \
  apt-get install -y -t testing \
    docker.io \
    ffmpeg \
    dvipng \
    cm-super \
    libgeos-dev \
    tmux \
    nodejs \
    npm \
    python3-pip \
    r-base \
    r-base-dev \
    r-cran-littler \
    r-cran-devtools \
    r-cran-tidyverse \
    r-cran-upsetr \
    r-cran-irkernel

# Install Python packages
RUN pip3 install \
  numpy \
  scipy \
  matplotlib \
  ipython \
  jupyter \
  pandas \
  seaborn \
  altair \
  ipykernel \
  stats \
  geopy \
  tzwhere \
  dask \
  beautifulsoup4 \
  bokeh \
  bottleneck \
  cloudpickle \
  cython \
  dill \
  h5py \
  statsmodels \
  sympy \
  tables \
  numexpr \
  patsy \
  protobuf \
  sqlalchemy \
  xlrd \
  plotly \
  keras && \
  pip install scikit-learn scikit-image

# Configure IRKernel/IPyKernel and remove the erroneous python3.7 binaries.
RUN Rscript -e "IRkernel::installspec(user = FALSE)" && python3 -m ipykernel install && rm /usr/bin/python3.7*

# Configure VSCode extensions list and R/Py package managers.
ENV SERVICE_URL=https://marketplace.visualstudio.com/_apis/public/gallery
ENV ITEM_URL=https://marketplace.visualstudio.com/items
ENV R_LIBS_USER=~/.local/share/R/library
ENV PIP_USER=1

# VSCode extensions (must use --extra-extensions-dir=/opt/code-server/extensions)
RUN \
  code-server --extensions-dir /opt/code-server/extensions --install-extension ms-python.python && \
  code-server --extensions-dir /opt/code-server/extensions --install-extension ms-vscode.vscode-typescript-tslint-plugin && \
  code-server --extensions-dir /opt/code-server/extensions --install-extension ms-azuretools.vscode-docker && \
  code-server --extensions-dir /opt/code-server/extensions --install-extension ms-toolsai.jupyter && \
  code-server --extensions-dir /opt/code-server/extensions --install-extension GrapeCity.gc-excelviewer && \
  code-server --extensions-dir /opt/code-server/extensions --install-extension esbenp.prettier-vscode && \
  code-server --extensions-dir /opt/code-server/extensions --install-extension dbaeumer.vscode-eslint

# Updated the entrypoint script for DOCKER_HOME and restore from root to (different) UID:GID.
COPY ./entrypoint.sh /usr/bin/entrypoint.sh
RUN echo '{"folders": [{"path":"/home"},{"path":"/data"}],"settings":{"terminal.integrated.cwd": "${env:HOME}"}}' > /default.code-workspace
USER 500:500
ENTRYPOINT ["/usr/bin/entrypoint.sh", "--extra-extensions-dir", "/opt/code-server/extensions", "--disable-telemetry", "--bind-addr", "0.0.0.0:8080", "/default.code-workspace"]