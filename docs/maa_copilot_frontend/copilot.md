> * @Title: Helper
> * @Description: Edit maa-copilot-frontend with ChatGPT copilot
> * @Author: xiafu 
> * @FirstEditDate: 'Wed May 29 2024 14:51:26 GMT+0800 (中国标准时间)'
> * @LastEditDate: 
> * @Links: 文档结构转换插件: [project-tree](https://github.com/zhucyi/project-tree)



# How to convert a React project to Vue3 step by step.

1. **Project Structure Analysis**:
   - Review and document the React project's file and folder structure.
   - Identify key components, pages, and routing configurations.
2. **Core Functionality Identification**:
   - List out the main functionalities and business logic in the React project.
   - Note the primary libraries and dependencies used.
3. **Incremental Conversion**:
   - Start converting small, independent components from React to Vue3.
   - Test each converted component to ensure it functions correctly.
   - Gradually move to more complex components and pages.



## Folder Structure
::: details Show structure
```md
maa-copilot-frontend
├─ .editorconfig
├─ .env
├─ .env.development
├─ .eslintignore
├─ .eslintrc.js
├─ .git
│  ├─ config
│  ├─ description
│  ├─ HEAD
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  ├─ sendemail-validate.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ objects
│  │  ├─ info
│  │  └─ pack
│  │     ├─ pack-5fe9d17c96c9451d6667e495cdb072fbfd15f983.idx
│  │     ├─ pack-5fe9d17c96c9451d6667e495cdb072fbfd15f983.pack
│  │     └─ pack-5fe9d17c96c9451d6667e495cdb072fbfd15f983.rev
│  ├─ packed-refs
│  └─ refs
│     ├─ heads
│     │  └─ dev
│     ├─ remotes
│     │  └─ origin
│     │     └─ HEAD
│     └─ tags
├─ .github
│  └─ workflows
│     ├─ azure-deploy.yml
│     └─ scripts-update.yml
├─ .gitignore
├─ .node-version
├─ .prettierignore
├─ .prettierrc
├─ CHANGELOG.md
├─ index.html
├─ package.json
├─ post-build.mjs
├─ postcss.config.js
├─ public
│  ├─ android-chrome-192x192.png
│  ├─ android-chrome-512x512.png
│  ├─ apple-touch-icon.png
│  ├─ assets
│  │  ├─ operator-avatars
│  │  │  ├─ char_002_amiya.png
│  │  │  ├─ otherPicutres.png
│  │  └─ prof-icons
│  │     ├─ CASTER.png
│  │     ├─ MEDIC.png
│  │     ├─ PIONEER.png
│  │     ├─ SNIPER.png
│  │     ├─ SPECIAL.png
│  │     ├─ SUPPORT.png
│  │     ├─ TANK.png
│  │     └─ WARRIOR.png
│  ├─ browserconfig.xml
│  ├─ favicon-16x16.png
│  ├─ favicon-32x32.png
│  ├─ favicon.ico
│  ├─ mstile-150x150.png
│  ├─ safari-pinned-tab.svg
│  └─ site.webmanifest
├─ README.md
├─ scripts
│  ├─ shared.ts
│  ├─ update-operator-avatars.ts
│  ├─ update-operators.ts
│  └─ update-prof-icons.ts
├─ src
│  ├─ apis
│  │  ├─ announcement.ts
│  │  ├─ auth.ts
│  │  ├─ comment.ts
│  │  ├─ level.ts
│  │  ├─ mock
│  │  │  └─ announcements.md
│  │  ├─ operation-set.ts
│  │  └─ operation.ts
│  ├─ App.tsx
│  ├─ components
│  │  ├─ account
│  │  │  ├─ AuthFormShared.tsx
│  │  │  ├─ EditDialog.tsx
│  │  │  ├─ LoginPanel.tsx
│  │  │  ├─ RegisterPanel.tsx
│  │  │  └─ ResetPasswordDialog.tsx
│  │  ├─ AccountManager.tsx
│  │  ├─ ActionCard.tsx
│  │  ├─ announcement
│  │  │  ├─ AnnDialog.tsx
│  │  │  └─ AnnPanel.tsx
│  │  ├─ BackToTop.tsx
│  │  ├─ CardTitle.tsx
│  │  ├─ dnd.tsx
│  │  ├─ drawer
│  │  │  ├─ DrawerLayout.tsx
│  │  │  ├─ NavAside.tsx
│  │  │  └─ OperationDrawer.tsx
│  │  ├─ editor
│  │  │  ├─ action
│  │  │  │  ├─ EditorActionAdd.tsx
│  │  │  │  ├─ EditorActionDelay.tsx
│  │  │  │  ├─ EditorActionDistance.tsx
│  │  │  │  ├─ EditorActionDocColor.tsx
│  │  │  │  ├─ EditorActionExecPredicate.tsx
│  │  │  │  ├─ EditorActionItem.tsx
│  │  │  │  ├─ EditorActionModule.tsx
│  │  │  │  ├─ EditorActionOperatorDirection.tsx
│  │  │  │  ├─ EditorActionOperatorLocation.tsx
│  │  │  │  ├─ EditorActions.tsx
│  │  │  │  ├─ EditorActionTypeSelect.tsx
│  │  │  │  └─ validation.ts
│  │  │  ├─ CardOptions.tsx
│  │  │  ├─ converter.ts
│  │  │  ├─ DetailedSelect.tsx
│  │  │  ├─ EditorFieldProps.tsx
│  │  │  ├─ EditorIntegerInput.tsx
│  │  │  ├─ EditorResetButton.tsx
│  │  │  ├─ floatingMap
│  │  │  │  ├─ connection.ts
│  │  │  │  ├─ FloatingMap.tsx
│  │  │  │  └─ FloatingMapContext.tsx
│  │  │  ├─ FormError.tsx
│  │  │  ├─ FormSubmitButton.tsx
│  │  │  ├─ NumericInput2.tsx
│  │  │  ├─ OperationEditor.tsx
│  │  │  ├─ OperationEditorLauncher.tsx
│  │  │  ├─ operator
│  │  │  │  ├─ EditorGroupItem.tsx
│  │  │  │  ├─ EditorOperator.tsx
│  │  │  │  ├─ EditorOperatorGroupSelect.tsx
│  │  │  │  ├─ EditorOperatorItem.tsx
│  │  │  │  ├─ EditorOperatorSelect.tsx
│  │  │  │  ├─ EditorOperatorSkill.tsx
│  │  │  │  ├─ EditorOperatorSkillTimes.tsx
│  │  │  │  ├─ EditorOperatorSkillUsage.tsx
│  │  │  │  ├─ EditorPerformer.tsx
│  │  │  │  ├─ EditorPerformerAdd.tsx
│  │  │  │  ├─ EditorPerformerGroup.tsx
│  │  │  │  ├─ EditorPerformerOperator.tsx
│  │  │  │  ├─ EditorSheet.tsx
│  │  │  │  └─ sheet
│  │  │  │     ├─ SheetContainerSkeleton.tsx
│  │  │  │     ├─ sheetGroup
│  │  │  │     │  ├─ SheetGroupItem.tsx
│  │  │  │     │  └─ SheetGroupOperatorSelect.tsx
│  │  │  │     ├─ SheetGroup.tsx
│  │  │  │     ├─ SheetNoneData.tsx
│  │  │  │     ├─ SheetOperator.tsx
│  │  │  │     ├─ SheetOperatorItem.tsx
│  │  │  │     └─ SheetOperatorSkillAbout.tsx
│  │  │  ├─ source
│  │  │  │  ├─ FileImporter.tsx
│  │  │  │  ├─ ShortCodeImporter.tsx
│  │  │  │  ├─ SourceEditor.tsx
│  │  │  │  ├─ SourceEditorButton.tsx
│  │  │  │  └─ SourceEditorHeader.tsx
│  │  │  ├─ useAutosave.tsx
│  │  │  └─ validation.ts
│  │  ├─ entity
│  │  │  ├─ EDifficulty.tsx
│  │  │  └─ ELevel.tsx
│  │  ├─ FactItem.tsx
│  │  ├─ FieldResetButton.tsx
│  │  ├─ FormField.tsx
│  │  ├─ GlobalErrorBoundary.tsx
│  │  ├─ HelperText.tsx
│  │  ├─ Markdown.tsx
│  │  ├─ NavExpandButton.tsx
│  │  ├─ operation-set
│  │  │  ├─ AddToOperationSet.tsx
│  │  │  └─ OperationSetEditor.tsx
│  │  ├─ OperationCard.tsx
│  │  ├─ OperationList.tsx
│  │  ├─ Operations.tsx
│  │  ├─ OperationSetCard.tsx
│  │  ├─ OperationSetList.tsx
│  │  ├─ OperatorSelect.tsx
│  │  ├─ OutlinedIcon.tsx
│  │  ├─ Paragraphs.tsx
│  │  ├─ RelativeTime.tsx
│  │  ├─ ReLink.tsx
│  │  ├─ Suggest.tsx
│  │  ├─ Suspensable.tsx
│  │  ├─ ThemeSwitchButton.tsx
│  │  ├─ Toaster.tsx
│  │  ├─ uploader
│  │  │  ├─ OperationUploader.tsx
│  │  │  ├─ OperationUploaderLauncher.tsx
│  │  │  └─ utils.ts
│  │  └─ viewer
│  │     ├─ comment
│  │     │  ├─ CommentArea.tsx
│  │     │  └─ CommentForm.tsx
│  │     ├─ OperationRating.tsx
│  │     ├─ OperationSetViewer.tsx
│  │     └─ OperationViewer.tsx
│  ├─ layouts
│  │  └─ AppLayout.tsx
│  ├─ main.tsx
│  ├─ models
│  │  ├─ announcement.ts
│  │  ├─ arknights.ts
│  │  ├─ comment.ts
│  │  ├─ converter.ts
│  │  ├─ copilot.schema.json
│  │  ├─ copilot.schema.ts
│  │  ├─ copilot.schema.validator.ts
│  │  ├─ generated
│  │  │  ├─ do not edit these files
│  │  │  └─ operators.json
│  │  ├─ level.ts
│  │  ├─ network.ts
│  │  ├─ operation-set.ts
│  │  ├─ operation.ts
│  │  ├─ operator.ts
│  │  ├─ rating.ts
│  │  ├─ shortCode.ts
│  │  └─ types.ts
│  ├─ pages
│  │  ├─ 404.tsx
│  │  ├─ about.tsx
│  │  ├─ create.tsx
│  │  ├─ index.tsx
│  │  └─ view.tsx
│  ├─ services
│  │  └─ operation.ts
│  ├─ store
│  │  ├─ auth.ts
│  │  ├─ nav.ts
│  │  ├─ pref.ts
│  │  ├─ useFavGroups.ts
│  │  └─ useFavOperators.ts
│  ├─ styles
│  │  ├─ blueprint.less
│  │  ├─ global.css
│  │  ├─ index.css
│  │  └─ tailwind.css
│  ├─ types.d.ts
│  ├─ utils
│  │  ├─ device.ts
│  │  ├─ error.ts
│  │  ├─ maa-copilot-client.ts
│  │  ├─ messenger.ts
│  │  ├─ object.ts
│  │  ├─ regexes.ts
│  │  ├─ swr.ts
│  │  ├─ times.ts
│  │  ├─ token-manager.ts
│  │  ├─ useAfterRender.ts
│  │  ├─ useCurrenSize.ts
│  │  ├─ useEditableFields.ts
│  │  ├─ useLazyStorage.tsx
│  │  ├─ useNetworkState.ts
│  │  └─ wrapErrorMessage.ts
│  └─ vite-env.d.ts
├─ staticwebapp.config.json
├─ tailwind.config.js
├─ tsconfig.json
├─ tsconfig.node.json
├─ vite.config.ts
└─ yarn.lock
```
:::

Based on the directory structure provided, we can start by identifying the key areas of the project and then proceed with the conversion. Here are the steps we can take:

1. **Understand the Project Structure and Key Components**:
   - **Entry Point**: `main.tsx` and `App.tsx` are crucial as they are the starting point of the React application.
   - **Components**: Located in the `src/components` directory, these are the building blocks of the UI.
   - **Pages**: Found in the `src/pages` directory, representing different routes in the application.
   - **APIs and Services**: Located in the `src/apis` and `src/services` directories, handling data fetching and business logic.
   - **Store**: Located in the `src/store` directory, likely using a state management library like Redux or Context API.
   - **Utilities and Helpers**: Located in the `src/utils` directory, containing reusable utility functions.
   - **Styles**: Found in the `src/styles` directory, including CSS and other style-related files.
2. **Create a Basic Vue3 Project**:
   - Initialize a new Vue3 project using Vue CLI or Vite.
   - Set up the project structure similar to the React project to maintain consistency.
3. **Start with Simple Components**:
   - Begin converting simple components from React to Vue3.
   - Ensure the converted components are functional and visually consistent.
4. **Convert Pages and Routing**:
   - Set up Vue Router and start converting the pages from React to Vue3.
   - Ensure the routing logic matches the original project.
5. **Handle State Management**:
   - Choose a state management solution for Vue3 (e.g., Vuex or Pinia).
   - Convert the existing state management logic from React to Vue3.
6. **Convert APIs and Services**:
   - Migrate the API calls and services logic to the new Vue3 project.
