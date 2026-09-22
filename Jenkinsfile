pipeline{
    agent any
    stages{
        stage('checkout'){
            steps{
                deleteDir()
                sh '''
                git clone https://github.com/Musthaffaa/pipeline.git
                ls -l
                '''
            }
        }
        stage('deploy'){
            steps{
                sh '''
                rm -rf /var/www/hmtl/*
                cp -r pipeline/* /var/www/html
                '''
            }
        }
    }
}
