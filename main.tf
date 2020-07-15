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

resource "null_resource" "example" {
  triggers = {
    value = "A example resource that does nothing!"
  }
}
