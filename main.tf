terraform {
  backend "remote" {
    # The name of your Terraform Cloud organization.
    organization = "lefthoek"

    # The name of the Terraform Cloud workspace to store Terraform state files in.
    workspaces {
      name = "infra"
    }
  }
}

provider "aws" {
  version = "~> 2.0"
  region  = "us-east-1"
}


variable "root_domain_name" {
  default = "lefthoek.com"
}

resource "aws_route53_zone" "zone" {
  name = var.root_domain_name
}

resource "aws_acm_certificate" "certificate" {
  domain_name               = "*.${var.root_domain_name}"
  validation_method         = "DNS"
  subject_alternative_names = [var.root_domain_name]
}

module "website" {
  source = "./infra/website"
  subdomain_prefix = "brandbook"
  root_domain_name = var.root_domain_name
  certificate_arn = aws_acm_certificate.certificate.arn
  zone_id = aws_route53_zone.zone.zone_id
}

