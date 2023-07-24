WebDriverManager.chromedriver().setup();
WebDriverManager.firefoxdriver().setup();
WebDriverManager.edgedriver().setup();
WebDriverManager.operadriver().setup();
WebDriverManager.chromiumdriver().setup()
WebDriverManager.iedriver().setup();

 System.out.println("Launching google chrome with new profile..");
    WebDriverManager.chromedriver().setup();
    WebDriver driver = new ChromeDriver();

import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.edge.EdgeOptions; 
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Parameters;
import org.openqa.selenium.WebDriver;
import java.net.MalformedURLException;
 
public void testSetUp()
{
        EdgeOptions options = new EdgeOptions();
        options.setAcceptInsecureCerts(true);
        WebDriver driver = new EdgeDriver(options);
        driver.get("https://www.lambdatest.com");
}

DesiredCapabilities capabilities = new DesiredCapabilities();
capabilities.setCapability("browser", "Chrome");
capabilities.setCapability("version", "86");
capabilities.setCapability("platform", "MacOS Catalina");
capabilities.setCapability("build", "your build name");
capabilities.setCapability("name", "your test name");


// Capability setting to enable Headless browser testing
caps.setCapability("headless",true);


import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

public class SeleniumTest {
    public static void main(String[] args) {
        ChromeOptions options = new ChromeOptions();
        
        // addArguments parameter tells Chrome browser that it should be run without UI (Headless)
        options.addArguments("--headless");
        WebDriver driver = new ChromeDriver(options);

        driver.get("https://ecommerce-playground.lambdatest.io/");

        driver.quit();
    }
}

import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.chrome.ChromeDriverService;
import org.openqa.selenium.DevTools;
import org.openqa.selenium.devtools.DevToolsException;

public class SeleniumTest {
    public static void main(String[] args) {
        ChromeOptions options = new ChromeOptions();
        options.addArguments("--headless"); // Run Chrome in headless mode

        ChromeDriverService service = new ChromeDriverService.Builder()
                .usingDriverExecutable(new File("path/to/chromedriver"))
                .usingAnyFreePort()
                .build();

        ChromeDriver driver = new ChromeDriver(service, options);
        DevTools devTools = driver.getDevTools();

        try {
            devTools.createSession();
            devTools.send("Network.enable", null); // Enable the Network domain
            devTools.send("Network.emulateNetworkConditions", Map.of("offline", false, "latency", 100, "downloadThroughput", 1024));
            // Emulate network conditions: online, latency 100ms, download throughput 1024 KB/s

            driver.get("https://ecommerce-playground.lambdatest.io/");
            // Perform interactions or assertions on the webpage

            devTools.close(); // Close the DevTools session
        } catch (DevToolsException e) {
            e.printStackTrace();
        } finally {
            driver.quit(); // Quit the browser
        }
    }
}


import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.devtools.DevTools;
import org.openqa.selenium.devtools.DevToolsException;
import io.github.bonigarcia.wdm.WebDriverManager;

public class SeleniumTest {
    public static void main(String[] args) {
        // Run Chrome in headless mode
        ChromeOptions options = new ChromeOptions();
        options.addArguments("--headless");

        // Use WebDriver Manager to setup ChromeDriver
        WebDriverManager.chromedriver().setup();

        ChromeDriver driver = new ChromeDriver(options);
        DevTools devTools = driver.getDevTools();

        try {
            // Enable the Network domain
            devTools.createSession();
            devTools.send("Network.enable", null);

            // Emulate network conditions: online, latency 100ms, download throughput 1024 KB/s
            devTools.send("Network.emulateNetworkConditions", Map.of("offline", false, "latency", 100, "downloadThroughput", 1024));

            // Perform interactions or assertions on the webpage
            driver.get("https://ecommerce-playground.lambdatest.io/");

            // Close the DevTools session
            devTools.close();
        } catch (DevToolsException e) {
            e.printStackTrace();
        } finally {
            driver.quit(); // Quit the browser
        }
    }
}

 options.addArguments("--headless=new")
