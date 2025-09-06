# Calculadora de Juros Compostos / Compound Interest Calculator

A modern, responsive compound interest calculator built with Next.js 15, featuring internationalization support and dark mode. Calculate your investment growth with monthly contributions and visualize results with an intuitive interface.

## 🚀 Features

- **Advanced Calculations**: Calculate compound interest with initial values and monthly contributions
- **Internationalization**: Full support for Portuguese (PT) and English (EN)
- **Dark Mode**: Automatic dark mode support based on system preferences
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Input Flexibility**: Supports both Brazilian (7.855,77) and international (7,855.77) number formats
- **Real-time Validation**: Comprehensive form validation with helpful error messages
- **Visual Results**: Progress bars and detailed breakdown of investment growth
- **Professional UI**: Modern design following salary-calculator patterns

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with Turbopack
- **Language**: TypeScript
- **Styling**: Tailwind CSS with dark mode
- **Internationalization**: next-intl
- **UI Components**: Custom React components
- **State Management**: React hooks (useState)

## 📱 Screenshots

The calculator features a clean, professional interface with:
- Form inputs for initial value, monthly contributions, interest rate, and period
- Real-time validation and error feedback
- Detailed results with visual progress indicators
- Language selector for Portuguese/English
- Comprehensive explanations of compound interest concepts

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/azevedo-pedro/compound-interest-calculator.git
   cd calculadora-juros-compostos
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📖 Usage

### Basic Calculation
1. Enter your **Initial Value** (optional)
2. Set your **Monthly Contribution** (optional, but at least one value is required)
3. Input the **Interest Rate** (annual percentage)
4. Specify the **Period** in months (e.g., 24 for 2 years, 60 for 5 years)
5. Click **Calculate** to see results

### Input Formats
The calculator accepts various number formats:
- **Brazilian**: `1.500,50` (dot as thousands separator, comma as decimal)
- **International**: `1,500.50` (comma as thousands separator, dot as decimal)
- **Simple**: `1500.50` or `1500,50`

### Results Display
- **Final Amount**: Total value after the specified period
- **Total Invested**: Sum of all contributions
- **Interest Earned**: Total interest generated
- **Return Rate**: Percentage return on investment
- **Evolution Chart**: Visual representation of contributions vs. interest
- **Additional Metrics**: Average monthly values and growth statistics

## 🌍 Internationalization

The application supports two languages:

- **Portuguese (PT)**: Default language, accessed via `/pt` or root `/`
- **English (EN)**: Accessed via `/en`

Language can be changed using the selector at the bottom of the page. All text, error messages, and explanations are fully translated.

## 🎨 Customization

### Adding New Languages
1. Create a new message file in `/messages/[locale].json`
2. Update the locales array in `src/i18n.ts`
3. Update middleware configuration in `src/middleware.ts`
4. Add the new language option in the language selector

### Styling Modifications
The project uses Tailwind CSS. Key styling files:
- `tailwind.config.js`: Main Tailwind configuration
- `src/app/globals.css`: Global styles
- Component-level: Inline Tailwind classes

## 📂 Project Structure

```
calculadora-juros-compostos/
├── messages/                   # Translation files
│   ├── en.json                # English translations
│   └── pt.json                # Portuguese translations
├── src/
│   ├── app/
│   │   ├── [locale]/          # Localized routes
│   │   │   ├── layout.tsx     # Locale-specific layout
│   │   │   └── page.tsx       # Main calculator page
│   │   ├── globals.css        # Global styles
│   │   └── page.tsx           # Root redirect page
│   ├── hooks/
│   │   └── useCompoundInterestCalculator.ts  # Calculator logic
│   ├── i18n.ts                # Internationalization config
│   └── middleware.ts          # Locale routing middleware
├── next.config.ts             # Next.js configuration
├── tailwind.config.js         # Tailwind CSS configuration
└── package.json               # Dependencies and scripts
```

## 🧮 Calculation Logic

The compound interest calculation uses the formula:
```
A = P(1 + r)^t + PMT[((1 + r)^t - 1) / r]
```

Where:
- **A**: Final amount
- **P**: Principal (initial value)
- **r**: Monthly interest rate (annual rate / 12)
- **t**: Number of months
- **PMT**: Monthly payment (contribution)

## 🔍 Input Validation

The calculator includes comprehensive validation:
- **Initial Value**: Must be non-negative
- **Monthly Contribution**: Must be non-negative
- **Interest Rate**: Must be between 0% and 100%
- **Period**: Must be between 1 and 600 months (50 years)
- **General**: At least one of initial value or monthly contribution must be provided

## 📱 Responsive Design

The interface adapts to different screen sizes:
- **Desktop**: Full 4-column result display
- **Tablet**: 2-column layout with responsive cards
- **Mobile**: Single-column stack layout

## 🌙 Dark Mode

Dark mode is automatically applied based on system preferences using Tailwind's `dark:` classes. The theme includes:
- Dark backgrounds with proper contrast
- Adjusted text colors for readability
- Consistent component theming
- Smooth transitions between modes

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure build settings (Next.js preset works automatically)
3. Deploy with automatic previews for pull requests

### Other Platforms
```bash
npm run build
npm start
```

The application will be built and ready to serve on any Node.js hosting platform.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

Created by [Pedro Azevedo](https://github.com/azevedo-pedro)

---

## 💡 Educational Content

The calculator includes educational explanations about:
- **Compound Interest**: How interest compounds over time
- **Monthly Contributions**: Impact of regular investments
- **Time Value**: The importance of starting early
- **Rate Effects**: How different rates affect growth

Perfect for learning about personal finance and investment planning!
