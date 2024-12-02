pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                echo 'Construyendo el proyecto...'
                // Aquí puedes agregar pasos específicos si tienes alguno
                jiraSendBuildInfo site: 'vrgonzalez63.atlassian.net'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Desplegando el proyecto...'
                // Aquí puedes agregar más pasos para el despliegue
                jiraSendDeploymentInfo site: 'vrgonzalez63.atlassian.net'
            }
        }
    }
}
