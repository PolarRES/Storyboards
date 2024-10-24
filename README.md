# PolarRes Dashboard

This repository is an updated fork from [https://github.com/eucp-project/storyboards](https://github.com/eucp-project/storyboards) compatible with nuxt 3

# Table of contents

- [Accessing the dashboard](#accessing-the-dashboard)
- [Stories Content](#stories-content)
- [Adding your stories to the dashboard](#adding-your-stories-to-the-dashboard)
- [Local development](#local-development)

# Accessing the dashboard

The dashboard is automatically compiled and publisehd at [https://polarres.github.io/Storyboards/](https://polarres.github.io/Storyboards/)

# Stories Content

## File Structure

Stories are defined using markdown (.md) files. All stories should be stored in the /public/stories folder (e.g. my-story-name.md). Note that the filename should not contain spaces or special characters and **only lowercase letters** (the filename will be mapped to a story url on the website). To store additional files used in your story (like images), you must created a directory with the name of your story preceded by an underscore "\_" (e.g \_my-story-name) in the /public/stories folder. Again, do not use any special characters in your additional file names.

## Story File

The content of the story is defined in markdown and explained hereafter. For more information on markdown structure check [markdownguide](https://www.markdownguide.org/basic-syntax/)

### Frontmatter

The frontmatter is defined at the start of the files and declare some meta parameters about your story. The front matter parameters should be enclosed between tripe dashes

    ---
    id: 123 [id of the story]
    category: CATEGORY ABC [category of the story - displayed on the main page]
    title: This is a story title [title of the story]
    author: Arnaud Browet [author of the story]
    thumbnail: "thumbnail.png" [image used in the main dashboard page - this must be a valid image file in your story asset directory]
    ---

### Content of your story

The stories are defined as a series of chapters (sub-pages in your story) right after the frontmatter. Each chapter must have a headline (that is displayed in the navigation bar of your story) and an image. The structure of a chapter is as followed

    :::Chapter{headline="Chapter Headline" image="chapter-image.png"}

        [...the text content of your chapter ]

    :::

If your headline contains spaces, it must be enquoted with double quotes "..."

The text content must contain valid markdown content

### Story file example

    ---
    id: 123
    category: PolarRes Climate
    title: Testing PolarRes Story Dashboard
    author: Arnaud Browet
    thumbnail: "thumbnail.png"
    ---

    :::Chapter{headline="Introduction" image="introduction.png"}
    ## Introduction Title
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla iaculis felis nec tellus lacinia, id viverra sem tincidunt. Nulla consequat augue vitae ante pulvinar interdum. Vestibulum lorem libero, cursus finibus risus at, rutrum blandit risus. Nullam dictum volutpat sagittis. Maecenas vestibulum purus elit, vel gravida orci interdum id. Aliquam erat volutpat. Curabitur rutrum metus et congue egestas. Etiam bibendum sed velit at malesuada. Integer justo libero, aliquam blandit massa et, euismod sodales magna. Integer eu nunc in justo aliquet accumsan. Nulla ac vestibulum eros. Donec pellentesque urna at maximus elementum. Quisque ac purus maximus, convallis massa in, gravida quam. In hac habitasse platea dictumst. In commodo bibendum porta. Nulla eu odio vel ipsum suscipit mollis non rutrum enim.

    ## How to add block quote ?

    Just use "> " on different lines

    > Block quote lines
    > Block quote lines
    > Block quote lines
    > Block quote lines
    > Block quote lines
    :::

    :::Chapter{headline="Second chapter" image="summary.png"}
    ## Assessing the value added

    To create a list of elements use *

    * 1st element of the list
    * Second element of the list

    :::

    :::Chapter{headline="Adding link" image=link.png}
    ## How to add a link

    Links are defined by using the [...](...) syntax: the first part enclosed in [...] is the link of your text; the second part enclosed in (...) is the actual link. For example [PolarRes Storyboards](https://polarres.github.io/Storyboards/)
    :::

# Adding your stories to the dashboard

To add a story to the dashboard, you must create a branch on the git repository and submit a pull request. One of the administator of the repository will analyzed your content and merge your branch. After that, your story will be automaticaly deployed

## Add a story using github

- First navigate the [branch list on Github](https://github.com/PolarRES/Storyboards/branches) and create a new branch with a representative name. Then select your new branch.
- Use the "Add a file" button (double check that you are in your newly created branch) and create a new file
  - set the path of the file to public/stories/[your-story-name].md
  - add the content of your story as defined above
  - commit your changes into the branch (with a clear message)
- Head back to the main page of the repo (double check that your are still in your branch) and again hit the "Add file button" but select upload file.
  - Add all the files that are used in the story and upload them to your branch. To avoid the next step (moving each file to the correct location), create a folder on your device named "public", create a folder inside it named "stories", then a folder named "\_your-story-name" and place all your files inside this last folder. Then upload the public folder directly (using the drag and drop feature)
  - Ensure that your files are located in the correct folders "public/stories/\_your-story-name/" otherwise [change the location of your uploaded files](https://docs.github.com/en/repositories/working-with-files/managing-files/moving-a-file-to-a-new-location)
- Submit your modification for a pull request (either using the "compare & pull request" button on the main page of the repository or using the "Pull requests page") If your changes are accepted, they will be published by an administrator

## Add a story using the cli

Clone (or pull) the repository, create a branch, make your edit (add story files and directories), push your branch and use github to create a pull request

    git clone https://github.com/PolarRES/Storyboards.git
    git checkout -b adding-a-story-branch

    ... create your story

    git add [add-your-new-files-here]
    git commit -m "Add a commit message explaining your branch content"
    git push

# Local development

## Start a Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
