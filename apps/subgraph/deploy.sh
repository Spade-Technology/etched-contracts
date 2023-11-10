# Read "./.version" and assign it to $VERSION
VERSION=$(cat ./.version)

# ask if it is a major, minor or patch update
echo "Is this a major, minor or patch update? (m/M, n/N, p/P)"
read -r UPDATE

# if it is a major update, increment the first number of the version
if [[ $UPDATE == "m" || $UPDATE == "M" ]]; then
  # split the version into an array
  IFS='.' read -r -a array <<< "$VERSION"
  # increment the first number
  array[0]=$((${array[0]} + 1))
  # set the second and third number to 0
  array[1]=0
  array[2]=0
  # join the array back into a string
  VERSION=$( IFS='.'; echo "${array[*]}" )
fi

# if it is a minor update, increment the second number of the version
if [[ $UPDATE == "n" || $UPDATE == "N" ]]; then
  # split the version into an array
  IFS='.' read -r -a array <<< "$VERSION"
  # increment the second number
  array[1]=$((${array[1]} + 1))
  # set the third number to 0
  array[2]=0
  # join the array back into a string
  VERSION=$( IFS='.'; echo "${array[*]}" )
fi

# if it is a patch update, increment the third number of the version
if [[ $UPDATE == "p" || $UPDATE == "P" ]]; then
  # split the version into an array
  IFS='.' read -r -a array <<< "$VERSION"
  # increment the third number
  array[2]=$((${array[2]} + 1))
  # join the array back into a string
  VERSION=$( IFS='.'; echo "${array[*]}" )
fi


# launch the graph command
graph deploy --studio etched -l v$VERSION

# write the new version to "./.version"
echo "$VERSION" > ./.version
# the format of the version is "major.minor.patch"