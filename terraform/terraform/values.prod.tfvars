environment = "dev"

vpc_subnet_az = "us-west-2a"

cidr_openvpn    = "10.0.1.0/24"
cidr_vpc        = "10.0.0.0/24"
cidr_vpc_subnet = "10.0.0.0/24"

# "t4g.micro" = 2 ARM cpus; 1gb RAM -- production min
# "t4g.xlarge" = 4 ARM cpus; 16gb RAM -- development

vm_ami           = "ami-0c29a2c5cf69b5a9c" # Ubuntu 24
vm_instance_type = "t4g.micro"
vm_volume_size   = 8
vm_volume_type   = "gp3"
