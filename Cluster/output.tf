output "cluster_id" {
  value = aws_eks_cluster.sai.id
}

output "node_group_id" {
  value = aws_eks_node_group.sai.id
}

output "vpc_id" {
  value = aws_vpc.sai_vpc.id
}

output "subnet_ids" {
  value = aws_subnet.sai_subnet[*].id
}
