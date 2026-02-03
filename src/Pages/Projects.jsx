import styles from "../Styles/Projects.module.css";

export default function Projects() {
  const projects = [
    {
      name: "🚗 Mobilis Fleet Manager",
      description:
        "Enterprise vehicle fleet management system. Track vehicles, schedule maintenance, assign drivers, and generate comprehensive reports with real-time monitoring.",
      buttonText: "Manage Fleet",
      link: "https://mobilis-gestion-du-parc-automobile.vercel.app/",
    },
    {
      name: "🏦 Enterprise Banking",
      description:
        "Full-stack banking platform with dual interfaces for users and admins. Manage accounts, process transactions, and handle secure financial operations at scale.",
      buttonText: "View Live",
      link: "https://bank-eight-woad.vercel.app/",
    },
    {
      name: "🛍️ Shop Manager Pro",
      description:
        "Complete shop management solution with employee tracking, inventory control, daily workflows, financial reports, and premium features for enterprise stores.",
      buttonText: "Explore App",
      link: "https://shop-manager-x3o9.vercel.app/",
    },
    {
      name: "🛒 E-Clothes Store",
      description:
        "Modern e-commerce platform for fashion. Browse clothing and accessories, secure checkout, cart management, and seamless shopping experience.",
      buttonText: "Shop Now",
      link: "https://e-commerce-shop-seven-pearl.vercel.app/",
    },
    {
      name: "🎮 Equation Calc Game",
      description:
        "Math challenge game with 50+ levels, background music, and progressive difficulty. Test your calculation skills and unlock special challenges.",
      buttonText: "Play Now",
      link: "https://equation-two.vercel.app/",
    },
    {
      name: "🎲 Dice vs Bot",
      description:
        "Interactive dice game with smooth animations. Roll against a smart AI opponent and compete for the highest score.",
      buttonText: "Play Now",
      link: "https://dice-web-game.vercel.app/",
    },
    {
      name: "🎮 Mini Games Hub",
      description:
        "Collection of browser-based mini-games including puzzles, reaction tests, and skill challenges. Quick fun for any break!",
      buttonText: "Play Games",
      link: "https://mini-games-h.vercel.app/",
    },
    {
      name: "🔤 Guess the Word",
      description:
        "Word-guessing challenge with clues and logic. Test your vocabulary skills and uncover hidden words through deduction.",
      buttonText: "Play Now",
      link: "https://abrain.vercel.app/",
    },
    {
      name: "⚔️ Pokémon Battle",
      description:
        "Quick Pokémon battle simulator. Choose your card by luck, fight the bot, and see who wins in this turn-based mini game.",
      buttonText: "Battle Now",
      link: "https://pokemon-battel.vercel.app/",
    },
    {
      name: "🕵️ Guess Who",
      description:
        "Enter any name and discover predicted age, gender, and nationality using API data. Fun interactive predictions with audio feedback.",
      buttonText: "Guess Now",
      link: "https://geuss-who.vercel.app/",
    },
    {
      name: "📝 NotePad Pro",
      description:
        "Distraction-free note-taking app with sidebar organization. Create, edit, and manage all your notes in one clean interface.",
      buttonText: "Start Writing",
      link: "https://notepad-azure-xi.vercel.app/",
    },
    {
      name: "✅ To-Do Manager",
      description:
        "Stay organized with task creation, completion tracking, and priority management. Clean modern interface for daily productivity.",
      buttonText: "Organize Tasks",
      link: "https://to-do-app-puce-three.vercel.app/",
    },
    {
      name: "🔐 Password Generator Pro",
      description:
        "Generate secure passwords with custom naming and saved history. Access previously used passwords for complete account management.",
      buttonText: "Generate Now",
      link: "https://password-generator-tan-iota.vercel.app/",
    },
    {
      name: "🔢 Counter App",
      description:
        "Simple counter with increment, decrement, and reset. Clean UI with smooth interactions for counting anything you need.",
      buttonText: "Start Counting",
      link: "https://timer-conter.vercel.app/",
    },
    {
      name: "💸 Money Transfer",
      description:
        "Send money instantly with secure transactions. Enter amount, choose recipient, and track real-time transfer status.",
      buttonText: "Transfer Now",
      link: "https://transfer-money-two.vercel.app/",
    },
    {
      name: "🌍 World Explorer",
      description:
        "Explore every country with detailed info: flags, capitals, population, languages, currencies, and direct Google Maps integration.",
      buttonText: "Explore World",
      link: "https://world-info-omega.vercel.app/",
    },
    {
      name: "☀️ Weather Forecast",
      description:
        "Real-time weather updates with temperature, forecasts, and location-based conditions. Clean modern interface for weather tracking.",
      buttonText: "Check Weather",
      link: "https://dev-weather-hamza.vercel.app/",
    },
    {
      name: "👤 Random User Generator",
      description:
        "Generate random user profiles with name, gender, email, phone, and location using RandomUser.me API. Perfect for testing.",
      buttonText: "Generate User",
      link: "https://get-alot-random-users.vercel.app/",
    },
    {
      name: "📧 Email Generator",
      description:
        "Create free random emails instantly. One-click copy for testing, signups, or temporary accounts. Quick and simple.",
      buttonText: "Get Email",
      link: "https://random-free-email.vercel.app/",
    },
    {
      name: "💬 Daily Quotes",
      description:
        "Get inspired with random motivational quotes. Fresh wisdom and inspiration at every click to brighten your day.",
      buttonText: "Inspire Me",
      link: "https://quote-day.vercel.app/",
    },
    {
      name: "😂 Joke Generator",
      description:
        "Need a laugh? Get random jokes instantly. Click for fresh humor anytime you need a mood boost.",
      buttonText: "Make Me Laugh",
      link: "https://joke-gen-ten.vercel.app/",
    },
    {
      name: "🐱 Cat Images",
      description:
        "Random cat pictures to brighten your day. Click for adorable cat photos whenever you need cuteness overload!",
      buttonText: "Meow!",
      link: "https://cats-gen.vercel.app/",
    },
    {
      name: "🍽️ Syrian Delights",
      description:
        "Authentic Syrian cuisine showcase with menus, reviews, and rich cultural flavors. Experience Syria's culinary heritage online.",
      buttonText: "View Menu",
      link: "https://syrien.vercel.app/",
    },
    {
      name: "🥩 Meet & Meat",
      description:
        "Premium BBQ and meat restaurant site with smoky vibes, menu highlights, and location details for carnivore enthusiasts.",
      buttonText: "Explore Menu",
      link: "https://meet-meat-alg.vercel.app/",
    },
    {
      name: "🌐 Discord Community",
      description:
        "Modern Discord server showcase with event announcements, community highlights, and direct invite link to join discussions.",
      buttonText: "Join Server",
      link: "https://algerian-discored.vercel.app/",
    },
  ];
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>My Projects</h2>
      <div className={styles.projects}>
        {projects.map((p, i) => (
          <div className={styles.projectCard} key={i}>
            <h3 className={styles.projectName}>{p.name}</h3>
            <div className={styles.centercontainer}>
              <p className={styles.projectDescription}>{p.description}</p>
              <a href={p.link}>
                <button className={styles.btn}>{p.buttonText}</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
