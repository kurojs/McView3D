
# McView3D - Minecraft Skin Viewer API  

🪛 **This project is still in its early version. Updates will be coming over time, improving functionalities and optimizing its use.** 

## 📌 Introduction  
**McView3D** is an API that allows you to view Minecraft skins in 3D directly from your browser.  
It uses [SkinView3D](https://github.com/bs-community/skinview3d) as a base and adapts it into a simple and accessible interface through URL queries.  
![Demo](https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExeDZwZ2R2cmtieThrNm5tbTZiMnQ0cWdnNHlhNmdwa2xjeDNtZDRlNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/RYrKwJGmVsabIT3EOE/giphy.gif)

## Features 👾
- **3D view of Minecraft skins**  
- **Dynamic animations**  
- **Load skins and capes via URL**  
- **Lightweight and easy to implement**  

## Live Demo   
Try the API directly in your browser:  
[McView3D](https://kurojs.github.io/McView3D/?skin=unlikekinght&height=400&width=400&cape=2016.png)

## Usages & parameters 📌
In this URL, the `skin` parameter at the end specifies the name of the skin you want to view.

To view a different skin, simply change the value of the `skin` parameter in the URL. Example:

- To view the **steve** skin:
  [Steve](https://kurojs.github.io/McView3D/?skin=steve)

You can customize the canvas size and add capes using the following parameters:

- `skin`: Specifies the Minecraft skin to display. If not provided, the default skin is `kuromy888`.
- `height`: Specifies the height of the canvas. Default is `400`.
- `width`: Specifies the width of the canvas. Default is `400`.
- `cape`: Specifies the name of the cape to display. If the value is set to `default`, the system will fetch the player's **Minecraft official cape** (the one configured in the official Minecraft launcher). If no cape is provided or if the cape name is not found, no cape will be displayed. 
  - You can visit the `SRC/CAPES` folder to see available custom capes, or provide a specific URL for a custom cape.

#### Example:
To view the **steve** skin with a canvas size of `300x300` and the `2016.png` cape:
[Steve with Cape](https://kurojs.github.io/McView3D/?skin=steve&height=300&width=300&cape=2016.png)

To view a player's skin (e.g., `kuromy888`) and automatically fetch their **official Minecraft cape**:
[Kuromy888 with Official Minecraft Cape](https://kurojs.github.io/McView3D/?skin=kuromy888&height=400&width=400&cape=default)



## 📦 Installation  
1. Clone the repository:  
   ```bash
   git clone https://github.com/kurojs/McView3D.git
   ```
2. Open the project in vscode and run a local server like this
   ```bash
   python -m http.server 8080
   ``` 
2. Open the link of your server url.  
3. Done! No additional dependencies are required.  

## Technologies Used  
- [SkinView3D](https://github.com/bs-community/skinview3d)
- [Minotar](https://minotar.net/)
- [Capes API](https://capes.dev/)
- HTML, CSS, JavaScript  

## License  
This project uses the MIT license. You can find more details in the [`LICENSE`](LICENSE) file.  

## Credits  
McView3D is based on the work of [bs-community/skinview3d](https://github.com/bs-community/skinview3d), a 3D skin viewer for Minecraft.  

---
## Documentation ✖️
Documentation are still under construction. Please stay tuned for updates.

👾 *Determination* 👾 ---
