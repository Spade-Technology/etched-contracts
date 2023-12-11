
# ask if it is a major, minor or patch update
echo "Is this a major, minor or patch update? (m/M, n/N, p/P)"
read -r UPDATE

# ask if it is prod or not
echo "Is this a production deployment? (y/Y for prod, any other key for non-prod)"
read -r PROD

# Read "./.version" and assign it to $VERSION
if [[ $PROD == "y" || $PROD == "Y" ]]; then
  VERSION=$(cat ./.version)
else
  VERSION=$(cat ./.versiondev)
fi


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
if [[ $PROD == "y" || $PROD == "Y" ]]; then
  graph deploy etched-mainnet --studio subgraph-mainnet.yaml -l prod-v-alpha-$VERSION
else
  graph deploy etched --studio subgraph-dev.yaml -l dev-v-alpha-$VERSION
fi

# write the new version to "./.version" or "./.versiondev" based on prod or dev
if [[ $PROD == "y" || $PROD == "Y" ]]; then
  echo "$VERSION" > ./.version
else
  echo "$VERSION" > ./.versiondev
fi

# the format of the version is "major.minor.patch"