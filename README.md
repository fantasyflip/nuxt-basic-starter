# Nuxt 3 Basic Starter

This repository includes a basic starter for Nuxt 3 with Tailwind CSS, i18n, linting, and Open Graph.

[Feature Overview](https://nuxt-basic.fantasyflip.de)

## Kubernetes Deployment

This repository is K8S-Ready, utilizing the following GitHub Actions and a K8S-Infra-Repo:

- [fantasyflip/k8s-build-transfer](https://github.com/fantasyflip/k8s-build-transfer)
- [fantasyflip/k8s-receive-apply](https://github.com/fantasyflip/k8s-receive-apply)

### Activation

To activate the deployment, define a trigger for the `fantasyflip/k8s-build-transfer` action in `.github/workflows/deploy.yaml`:

```yaml
name: Dockerize and Push to Infra-Repo

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Use Dockerize and Push to Infra-Repo Action
        uses: fantasyflip/k8s-build-transfer@v1
        with:
          node-version: 18
          infra-repo: "your-org/infra-repo"
          gh-token: ${{ secrets.GITHUB_TOKEN }}
          namespace: "nuxt-basic-starter"
          app-name: "nuxt-basic-starter"
```

This workflow will take all files in the `deployment` folder and push them to the infra-repo, where they will be applied to the K8S-Cluster by the `fantasyflip/k8s-receive-apply` action.

### Managing Environment Variables via Bitnami Sealed Secrets

To manage your environment variables, use Bitnami Sealed Secrets. Install the Sealed Secrets Controller on your K8S-Cluster. Follow the installation instructions [here](https://github.com/bitnami-labs/sealed-secrets).

You also need to install the `kubeseal` CLI on your local machine. Once both are installed, add your BASE64-encoded environment variables to the `unsealed_env.yaml` file in the repository root and run:

```bash
pnpm seal
```

**Note:** The `unsealed_env.yaml` file is listed in `.gitignore` and should not be pushed to the repository. The generated `env.yaml` file in the `deployment` folder is the one that should be pushed.

## Nuxt 3 Usage Information

Refer to the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) for more information.

### Install Dependencies

```bash
# Using pnpm
pnpm install
```

### Development Server

Start the development server at `http://localhost:3000`:

```bash
# Using pnpm
pnpm dev
```

### Production

Build the application for production:

```bash
# Using pnpm
pnpm build
```

Preview the production build locally:

```bash
# Using pnpm
pnpm preview
```

For more details, check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment).
