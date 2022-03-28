#!/bin/sh

# node = './node.sh yarn dev --watch ./mysql.sh'

tmux new-session -s bookstore ./app.sh \; split-window -v -p 35 ./node.sh yarn dev --watch \; split-window -h -p 50 ./mysql.sh \; select-pane -t 0 \; split-window -h -p 50 \;

# tmux ctrl + b d | detach from session
# tmux kill-ses -t mysession | kill session mysession
# tmux kill-session -a  | kill all current sessions 

# tmux ctrl + b s 
# tmux list-sessions | show all sessions

