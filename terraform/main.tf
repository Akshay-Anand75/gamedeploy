provider "aws" {
  region = "ap-south-2"
}

resource "aws_instance" "ClearGame" {
  ami           = "ami-090b9c8aa1c84aefc" 
  instance_type = "t3.small"
  key_name      = "cicd"

  security_groups = [aws_security_group.CleanDeploy.name]

  user_data = <<-EOF
              #!/bin/bash
              apt update -y
              apt install nginx -y
              systemctl start nginx
              systemctl enable nginx
              EOF

  tags = {
    Name = "Game-Clean"
  }
}

resource "aws_security_group" "CleanDeploy" {
  name = "game2"

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}
output "public_ip" {
  value = aws_instance.game_server.public_ip
}
