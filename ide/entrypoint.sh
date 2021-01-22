#!/bin/sh
set -eu

# We do this first to ensure sudo works below when renaming the user.
# Otherwise the current container UID may not exist in the passwd database.
eval "$(fixuid -q)"

if [ "${DOCKER_USER-}" ]; then
  echo "$DOCKER_USER ALL=(ALL) NOPASSWD:ALL" | sudo tee -a /etc/sudoers.d/nopasswd > /dev/null
  sudo usermod --login "$DOCKER_USER" ${DOCKER_HOME:+"--home"} $DOCKER_HOME coder
  sudo groupmod -n "$DOCKER_USER" coder

  USER="$DOCKER_USER"
  if [ "${DOCKER_HOME-}" ]; then
  	HOME="$DOCKER_HOME"
    mkdir -p $HOME/.local/share/R/library && cd $HOME
  fi

  sudo sed -i "/coder/d" /etc/sudoers.d/nopasswd
fi

dumb-init /usr/bin/code-server "$@"