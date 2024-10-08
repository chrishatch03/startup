# Notes

<div style="display: flex; flex-direction: row; items-align: center;">
    <a href="#git">Git</a> *
    <a href="#aws">AWS</a> *
    <a href="#deployment"></a> *
    <a href="#assignments-to-turn-in">Assignments to Turn In</a> *
</div>


## Git

### Merging Commit Conflicts
Resolving commit conflicts was not straight forward. Run ```git pull --rebase=false``` to pull the changes and review the merge. 


## AWS

### EC2 Instance

#### Create an instance

1. Open the AWS console in your browser and log in.

2. Navigate to the EC2 service.

3. Change your region (top right corner) to US East (N. Virginia) - us-east-1. Changing your region to N. Virginia will make it so that your server is located there. ⚠ This is crucial because the Amazon Machine Image (AMI) you will use is only available in N. Virginia.

4. Select the option to Launch instance.

5. Give your instance a meaningful name. Perhaps use a convention such as [owner]-[purpose]-[version].

6. We have created an Amazon Machine Image (AMI) for you to use as the base for your server. It has Ubuntu, Node.js, NVM, Caddy Server, and PM2 built right in so that you do not have to install them. Paste this AMI ID (ami-0b009f6c56cdd83ed) into the search box and press enter. Then select the Community AMIs tab. If no matches are found, make sure that your region is set to US East (N. Virginia) - us-east-1 (You can check this by looking in the top right corner of the page).

This should display the information about the class AMI. If the AMI ID matches ami-0b009f6c56cdd83ed select it.

7. Select t3.nano, t3.micro, or t2.micro for the instance type depending on how much power you want, how much you want to spend, or if you qualify for a free usage tier. Since I qualify for a free usage tier I did t2.micro

8. Create a new key pair. Make sure you save the key pair to your development environment. This needs to be safe in a place that is not publicly accessible and that you won't accidentally delete or commit to a GitHub repository. You will need this every time you secure shell (ssh) into this server (production environment). Note that you don't have to create a new key pair every time you launch an instance. You can use one that you created previously so that all of the servers you create can be accessed with the same key file.

9. For the network settings, make sure the auto-assign public IP address is enabled. For the Firewall (security group) select the option to Create security group if this is the first server that you are creating. Allow SSH, HTTP, and HTTPS traffic from anywhere.

10. A security group represents the rules for allowing access to your servers. Security group rules specify both the port that is accessible on your server, and the source IP address that requests are allowed from. Now that i've created a server security group, I can just use that one in the future.

11. If you are using a T3 class server you can take an advantage of the unlimited credit specification. If you are not using at T3 class instance you can ignore this step.

12. Select the option to Launch instance.

It will take a couple minutes for the instance to startup, but once it is marked as running it is close to being ready. Look at the properties for the instance and copy the public IP address.

Open your browser and paste the public IP address for your server in the location bar along with the prefix http://. For example:

http://3.22.63.37
If the server has started up, then you should see the following. Otherwise, wait a little bit and refresh your browser again. If the server is marked as running and it has been longer than 5 minutes, then there is a problem.

#### SSH to Your Server

ssh -i production.pem ubuntu@34.195.116.217

note production.pem is the key pair file

If you can't connect, go to the server instance in AWS Dashboard and select "Connect".

#### Elastic IP Address

Created for this project:
34.195.116.217
http://34.195.116.217

Elastic IP allows you to create a public IP that won't change if you turn your server off and on.

### Route 53 DOMAIN Service

myvision.click
(1 year, does not auto-renew)

registered to my elastic IP address 34.195.116.217


### HTTPS, TLS, Web Certificates

**HTTPS** - The secure version of HTTP is called Secure Hypertext Transport Protocol (HTTPS)
**TLS** - The handshake negotiation (Sometimes called SSL)
**Web Certificate** - A core piece of the handshake is the exchange of a web certificate that identifies the domain name of the server creating the secure connection. The browser will compare the certificate domain name to the one represented in the URL and if they don't match, or the certificate is invalid or out of date, it will display a massive warning.


## Deployment


### Simon

to deploy simon deliverables
```
Christopher simon-html ➤➤ ./deployFiles.sh -k <path to pemkey> -h myvision.click -s simon
```

### Startup

to deploy startup deliverables
```
./deployFiles.sh -k ../ec2Instance/production.pem -h myvision.click -s startup
```


## Other

### Tailwind

**Switched to using Tailwind Play CDN. You can ignore notes on the Tailwind CLI or Framework, unless it becomes necessary later on.**

When using the Tailwind CLI, Tailwind doesn't automatically re-build your classes unless you're using a web-framework like next.js or react. While developing, if you want your classes auto-rebuilt you need to run 
```
npx tailwindcss build input.css -o styles.css --watch
```
The '--watch' flag makes the build run continuously



When using a web-framework that uses npm run dev you can use Tailwind's PostCSS option.

### React Router Dom

Works by setting up a router in main.tsx or main.jsx

```
// Inject the router into the application root DOM element
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // BrowserRouter component that controls what is rendered
  // NavLink component captures user navigation requests
  // Routes component defines what component is routed to
  <BrowserRouter>
    <div className='app'>
      <nav>
        <NavLink to='/'>Home</Link>
        <NavLink to='/about'>About</Link>
        <NavLink to='/users'>Users</Link>
      </nav>

      <main>
        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/about' element={<About />} />
          <Route path='/users' element={<Users />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </main>
    </div>
  </BrowserRouter>
);
```

# Assignments to turn in


## Amazon Web Services - EC2

1. Create an EC2 instance using the class AMI (`ami-0b009f6c56cdd83ed`).
1. Assign an elastic IP address (highly suggested).
1. Test that you can see the default class web page from a browser using the server's public IP address.

Submit a URL using your web server's public IP address to the Canvas assignment.

***Submit*** "http://34.195.116.217"


## HTTPS, TLS, and web certificates

Submit a URL for web server's hostname to the Canvas assignment.

***Submit*** "https://myvision.click"

<img src="./assets/ec2_displays_basic_page.png" style="height: 100px">


## The Console

Experiment with console commands.

Once you have done this, go over to the assignments page in Canvas and submit the text that results from running `cat other.txt`.

***RESULTS to submit to canvas***
"xxyy"
```
Christopher test ➤➤ cat other.txt
xxyy
Christopher test ➤➤
```

## CodePen

Forked pen for this assignment "https://codepen.io/Christopher-Hatch/pen/BagQpaO"

## HTML Structure Elements

Forked pen for this assignment "https://codepen.io/Christopher-Hatch/pen/ZEdBLQY"

## HTML Input Elements

Forked pen for this assignment "https://codepen.io/Christopher-Hatch/pen/WNqRwzM"

## HTML Media Elements

Forked pen for this assignment "https://codepen.io/Christopher-Hatch/pen/WNqRwzM"

## CSS Flexbox

Forked pen for this assignment "https://codepen.io/Christopher-Hatch/pen/OJeEOoQ"

## JS Arrays

Forked pen for this assignment "https://codepen.io/Christopher-Hatch/pen/WNqKjmR"

## JS DOM

Forked pen for this assignment "https://codepen.io/Christopher-Hatch/pen/zYVLzxm"

## JS Pizza Promise

Forked pen for this assignment "https://codepen.io/Christopher-Hatch/pen/KKjBqbx"

## JS Components

Forked pen for this assignment "https://codepen.io/Christopher-Hatch/pen/LYKBjVR"

## React Tic-tac-toe Tutorial

Forked CodeSandbox for this assignment "https://codesandbox.io/p/sandbox/react-dev-forked-f5g76l?layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522cm0e9acit00073b6imk6m9tjn%2522%252C%2522sizes%2522%253A%255B100%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522cm0e9acis00033b6iho0l6j4f%2522%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522cm0e9acis00043b6ideanuoz2%2522%257D%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522cm0e9acis00063b6i5fvjzlrp%2522%257D%255D%257D%255D%252C%2522sizes%2522%253A%255B50%252C50%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522cm0e9acis00033b6iho0l6j4f%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522cm0e9acis00023b6i0nx82iho%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252Fsrc%252FApp.js%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%255D%252C%2522id%2522%253A%2522cm0e9acis00033b6iho0l6j4f%2522%252C%2522activeTabId%2522%253A%2522cm0e9acis00023b6i0nx82iho%2522%257D%252C%2522cm0e9acis00063b6i5fvjzlrp%2522%253A%257B%2522id%2522%253A%2522cm0e9acis00063b6i5fvjzlrp%2522%252C%2522activeTabId%2522%253A%2522cm0e9czuf000k3b6itp5xogb7%2522%252C%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522cm0e9acis00053b6ihtgp8nhk%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522UNASSIGNED_PORT%2522%252C%2522port%2522%253A0%257D%252C%257B%2522type%2522%253A%2522UNASSIGNED_PORT%2522%252C%2522port%2522%253A0%252C%2522id%2522%253A%2522cm0e9czuf000k3b6itp5xogb7%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%255D%257D%252C%2522cm0e9acis00043b6ideanuoz2%2522%253A%257B%2522tabs%2522%253A%255B%255D%252C%2522id%2522%253A%2522cm0e9acis00043b6ideanuoz2%2522%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Afalse%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D"

## React Reactivity

Forked pen for this assignment "https://codepen.io/Christopher-Hatch/pen/vYqaeOV"

## React Router

Forked pen for this assignment "https://codepen.io/Christopher-Hatch/pen/yLdqzJa"

## Fetch

Forked pen for this assignment "https://codepen.io/Christopher-Hatch/pen/dyBgJYP"