output "cf_distribution_id" {
  value       = aws_cloudfront_distribution.s3_distribution.id
  description = "The identifier for the distribution"
}
