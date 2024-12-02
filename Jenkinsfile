pipeline {
    agent any
    stages {
        stage('Checkout SCM') {
            steps {
                // Hacer checkout desde tu repositorio de GitHub
                git url: 'https://github.com/vrgonzalez/proyecto_integracion_continua.git', branch: 'master', credentialsId: 'jira-rest-api'
            }
        }
        stage('Deploy - Staging') {
            when {
                branch 'master'
            }
            steps {
                echo 'Deploying to Staging from master...'
            }
            post {
                always {
                    jiraSendDeploymentInfo environmentId: 'us-stg-1', environmentName: 'staging', environmentType: 'staging'
                }
            }
        }
        stage('Deploy - Production') {
            when {
                branch 'master'
            }
            steps {
                echo 'Deploying to Production from master...'
            }
            post {
                always {
                    jiraSendDeploymentInfo environmentId: 'us-prod-1', environmentName: 'production', environmentType: 'production'
                }
            }
        }
    }
}


