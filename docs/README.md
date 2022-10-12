# Bullets Diagramation

This component show a list-context to display a slider in desktop and other view on mobile.

Desktop View
![image](https://user-images.githubusercontent.com/101153916/195462021-1519304e-c456-426f-8812-9cbd43691e3d.png)

Mobile View
![image](https://user-images.githubusercontent.com/101153916/195462025-b5c159f9-d0d2-4321-a2b4-d3227a244f25.png)


## Configuration

### Step 1 -  Basic setup

Access in github to VTEX APPS and search react-app-template (https://github.com/vtex-apps/react-app-template) this is the template base for this project. If you want 
to start the project from the beginning clone this template.

### Step 2 - Cloning the repository

If you want to work with this template open your terminal a clone this repository, command (git clone [urlRepository], to your local files to be able to effectively 
start working on it.
Then, access the repository's directory using your terminal. 

### Step 3 - Editing the `Manifest.json`

Once in the repository directory, it is time to edit the `manifest.json` file. 

Once you are in the file, you must replace the `vendor` value. `vendor` is the account name you are working on, if you want yo can modify name, titel, and description. For example:

```json
{
  "vendor": "storecomponents",
  "name": "my-custom-component",
}
```
You should also check the `package.json` file globar and the file in react folder, verify the name and the version.

### Step 4 -  Installing node-modules

In your terminal enter in react folder, command (cd react), then put yarn in the terminal, this commad install node-modules folder, close your editor and open again 
the project in your editor, you should have install and funtional the modules in react folder.

### Step 5- Run and preview your component

Then time has come to upload all the changes you made in your local files to the platform. For that, use the `vtex link` command. If the process runs without any  
errors, the following message will be displayed: `App linked successfully`.

To use the component in a store you should this in your "dependencies" in `manifest.json` file, "vendorName.componentName" : "version", for example:

```json
{
"dependencies": {
    "itgloberspartnercl.bullets-diagramation": "0.x"
  }
}
```

Then put the component where ever you need.

This will enable you to see the applied changes in real time, through the account and workspace in which you are working.

## Dependencies
1. "vtex.native-types": "0.x"
2. "vtex.device-detector": "0.x"
3. "vtex.css-handles": "0.x

## Store Component Apps
1. "vtex.list-context": "0.x"

## Custom Apps
1. None

## Contributors
1. Daniela María Torres Vélez

