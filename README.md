1. yarn init
2. yarn add react react-dom next
3. Added script in package.json file from next-start / build and next dev.
4. Created pages folder and added index.js file in it.
5. Added code in index.js file.
6. Created _app.js file in pages folder and added code in it.
7. Yarn add saas
8. Created global.scss file in pages folder and added code in it. This is global css file.
9. Imported the global.scss in _app.js file. Global file must only be imported here
10. Created components folder and added Card.js etc file in it.
11. For component css use module.css file. Created card.module.css file in components folder and added code in it.
12. Created a public folder and added image in it.
13. For favicon used Head from Next in _app.js file. and used Link in Head tag to load favicon.
14. Used yarn run dev
15. .next directory got added automatically.
16. Non routed components are in components folder.
17. Routing components should be in pages folder. Either name them directly as event.js in pages folder or create a folder and name it as event and create index.js file in it.
18. In order to add some common components with each route like Header / Footer. Either place it in _aap.js file or in index.js file of pages folder or use layout folder and add index.js file in it and add code in it that will render {props.childen}. Then import it in index.js file of _app.js or pages folder and wrap base component as child of Layout component. 
19. We can also use component.getLayout function to customize the layout for each individual components and wrapping that component with Layout component.
20. If Header and Footer has to be in every page, we can add directly in _app.js else we use layout and then import this layout in individual components using Component.getLayout function. And then accessing this in _app.js for each rendered component.
21. For url routing, Link component has to be imported and in href prop we can give the url.
22. Dynamic routes are handled via [dynamicId].js file. Here dynamicId is the name of the file. We can access the dynamicId via useRouter hook.