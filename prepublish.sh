CURRENT_DIR=$(
    cd $(dirname $0)
    pwd
)

echo "rm out directory..."

rm -r $CURRENT_DIR/out || true

# echo "package..."
# npx electron-forge package

echo "prepublish..."
npm run prepublish
