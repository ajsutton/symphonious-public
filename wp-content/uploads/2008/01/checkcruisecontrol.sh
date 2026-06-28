if (curl --silent http://bob:8080/cruisecontrol/ | grep 'class="data date failure">[^<]' >> /dev/null) || (curl --silent http://benny:8080/cruisecontrol/ | grep 'class="data date failure">[^<]' >> /dev/null) then
	osascript -e 'set volume without output muted'
	osascript -e 'tell application "iTunes" to play playlist "Broken"'
else
	osascript -e 'tell application "iTunes" to stop'
	osascript -e 'set volume with output muted'
fi
