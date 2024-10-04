"use client"
import { ReactElement} from "react";
import cssStyle from "./services.module.css"
import { 
  MonitorSmartphone, 
  Layers, 
  Search, 
  Brush, 
  Zap, 
  Headphones, 
  Package, 
  ShoppingCart 
} from "lucide-react";

export default function Home() {
  type Service = {
    title: string,
    content: string,
    icon:ReactElement
  }
  const services:Service[] = [
    {
      title: "Responsive Web Design",
      content: "Our templates are designed to look great on any device, whether it's a desktop, tablet, or smartphone.",
      icon: <MonitorSmartphone width={100} height={100} className="icon"></MonitorSmartphone>
    },
    {
      title: "Custom Multi-Page Website Templates",
      content: "We offer a wide selection of multi-page website templates tailored for portfolios, businesses, e-commerce, and more.",
      icon: <Layers width={100} height={100} className="icon"></Layers>
    },
    {
      title: "SEO-Optimized Templates",
      content: "All templates are built with SEO best practices, ensuring your website ranks high on search engines.",
      icon: <Search width={100} height={100} className="icon"></Search>
    },
    {
      title: "Tailored Design Customization",
      content: "Our team customizes templates to match your brand’s identity, delivering visually stunning and unique designs.",
      icon: <Brush width={100} height={100} className="icon"></Brush>
    },
    {
      title: "Fast Loading & Optimized Performance",
      content: "We optimize all templates for speed and performance, ensuring a fast-loading and seamless user experience.",
      icon: <Zap width={100} height={100} className="icon"></Zap>
    },
    {
      title: "24/7 Customer Support",
      content: "Our support team is available round-the-clock to assist with technical issues, customization, or general inquiries.",
      icon: <Headphones width={100} height={100} className="icon"></Headphones>
    },
    {
      title: "Easy Integration & Setup",
      content: "Our templates integrate easily with popular CMS platforms like WordPress, Joomla, and others with step-by-step guides.",
      icon: <Package width={100} height={100} className="icon"></Package>
    },
    {
      title: "E-commerce Ready Templates",
      content: "We provide e-commerce-ready templates with features such as shopping carts, payment gateways, and product management.",
      icon: <ShoppingCart width={100} height={100} className="icon"></ShoppingCart>
    }
  ]
  
  return (
    <div className="page-container">
      <div className="page-title">
        <h1 className="title">Our Services</h1>
        <p>Welcome to Our Services page. This are top Services</p>

      </div>
      <div className={cssStyle.cards_container}>
        {services.map((service, index) => {
          return <div key={index} className={cssStyle.card}>
            <div className={cssStyle.icon_box}>
              {service.icon}
            </div>
            <div className={cssStyle.content}>
              <h1>{service.title}</h1>
              <p>{service.content}</p>
            </div>
          </div>

        })}
      </div>
    </div>
  );
}
