#!/bin/bash

echo "building images"

yarn build

echo "rename dist"
mv dist zisall_blog

echo "chown zisall_blog"
chown -R nginx:nginx zisall_blog

echo "chmod zisall_blog"
chmod -R 755 zisall_blog

echo "remove old file"
rm -rf /usr/share/nginx/zisall_blog

echo "mv new file"
mv zisall_blog /usr/share/nginx/

echo "reload nginx"
nginx -s reload 
