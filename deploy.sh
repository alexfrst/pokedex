yarn
yarn build
ssh -i $2 ec2-user@$1 rm -f -d -r /home/ec2-user/build
scp -r -i $2 build ec2-user@$1:/home/ec2-user/build
ssh -i $2 ec2-user@$1 sudo npm install -g serve
ssh -i $2 ec2-user@$1 sudo npm install -g pm2
ssh -i $2 ec2-user@$1 sudo pm2 kill
ssh -i $2 ec2-user@$1 sudo pm2 serve /home/ec2-user/build 4000 --spa