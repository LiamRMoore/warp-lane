SRC_PATTERN="warp-lane-ng-client"
if git diff --cached --name-only | grep --quiet "$SRC_PATTERN"
then
  echo "none"
  exit 0
fi
  ng lint && ng test --watch=false