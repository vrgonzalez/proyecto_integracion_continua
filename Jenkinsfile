pipeline {
    agent any

    environment {
        // Agregar el token de Codecov de Jenkins Credentials
        CODECOV_TOKEN = credentials('your-codecov-token')  // Token de Codecov guardado en Jenkins credentials
    }

    stages {
        // Etapa de construcción de la imagen Docker
        stage('Build Docker Image') {
            steps {
                script {
                    // Construir la imagen Docker de tu aplicación
                    docker.build('my-image')
                }
            }
        }

        // Etapa de ejecución de los tests y generación del reporte de cobertura
        stage('Run Tests and Generate Coverage Report') {
            steps {
                script {
                    // Ejecutar los tests dentro del contenedor de Docker y generar el reporte de cobertura
                    docker.image('my-image').inside {
                        sh 'npm run test -- --coverage'  // Este comando debe ser el que ejecute los tests y genere la cobertura (ajústalo según tu entorno)
                    }
                }
            }
        }

        // Etapa de subida del reporte de cobertura a Codecov
        stage('Upload Codecov Report') {
            steps {
                script {
                    // Subir el reporte de cobertura a Codecov
                    docker.image('my-image').inside {
                        sh 'bash <(curl -s https://codecov.io/bash)'  // Este es el comando para subir el reporte a Codecov
                    }
                }
            }
        }
    }
}
