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


module "lefthoek_domain" {
  source           = "./infra/domain"
  root_domain_name = "lefthoek.com"
}

module "lefthoek_brandbook" {
  source           = "./infra/website"
  subdomain_prefix = "brandbook"
  root_domain_name = module.lefthoek_domain.domain_name
  certificate_arn  = module.lefthoek_domain.certificate_arn
  zone_id          = module.lefthoek_domain.zone_id
}

module "lefthoek_decks" {
  source           = "./infra/website"
  subdomain_prefix = "decks"
  root_domain_name = module.lefthoek_domain.domain_name
  certificate_arn  = module.lefthoek_domain.certificate_arn
  zone_id          = module.lefthoek_domain.zone_id
}

