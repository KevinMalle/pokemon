# pokemon

Quel pokémon es-tu ?

Fais une simple recherche avec ton prénom et mon algorithme te dis quel pokémon te correspond !!

# Build
Pour lancer un build de mon projet, faire : docker build -t europe-west9-docker.pkg.dev/pokedevops/student-kevin/pokemon .

# Push
Pour push un build de mon projet, faire : docker push europe-west9-docker.pkg.dev/pokedevops/student-kevin/pokemon

# Images

Pour voir les images : docker images | more

# Dans gcloud
Pour configurer l'authentification via gcloud, faire : gcloud auth activate-service-account --key-file decoded_token.json

# Ajouter le service account
Pour faire ça, ecrire : gcloud auth configure-docker europe-west9-docker.pkg.dev

# Deployer en distant :

Pour faire ça, effectuer cette commande : gcloud run deploy --image=europe-west9-docker.pkg.dev/pokedevops/student-kevin/pokemon service-student-kevin-dev --project pokedevops
