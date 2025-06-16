import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Flattened fintech colors to match class usage
				'fintech-purple': '#9b87f5',
				'fintech-deep-purple': '#7E69AB',
				'fintech-blue': '#0066CC',
				'fintech-ocean-blue': '#0066CC',
				'fintech-orange': '#F97316',
				'fintech-green': '#2EB883',
				// Keep the nested structure for backwards compatibility
				fintech: {
					purple: '#9b87f5',
					'deep-purple': '#7E69AB',
					blue: '#0066CC',  // Updated to match the blue from the logo
					'ocean-blue': '#0066CC', // Updated to match
					orange: '#F97316', // Updated to match the orange from the logo
					green: '#2EB883', // Green color as per the logo
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'pulse-slow': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.8' }
				},
                'fade-in': {
                    '0%': { 
                        opacity: '0',
                        transform: 'translateY(10px)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)'
                    }
                },
                'scale-up': {
                    '0%': {
                        opacity: '0',
                        transform: 'scale(0.95)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'scale(1)'
                    }
                },
                'glow': {
                    '0%, 100%': { 
                        boxShadow: '0 0 10px rgba(155, 135, 245, 0.3)'
                    },
                    '50%': {
                        boxShadow: '0 0 20px rgba(155, 135, 245, 0.6)'
                    }
                },
                'slide-in': {
                    '0%': {
                        transform: 'translateX(-20px)',
                        opacity: '0'
                    },
                    '100%': {
                        transform: 'translateX(0)',
                        opacity: '1'
                    }
                },
                'border-glow': {
                    '0%, 100%': {
                        borderColor: 'rgba(155, 135, 245, 0.3)'
                    },
                    '50%': {
                        borderColor: 'rgba(155, 135, 245, 0.8)'
                    }
                },
                'float-slow': {
                    '0%, 100%': {
                        transform: 'translateY(0)'
                    },
                    '50%': {
                        transform: 'translateY(-5px)'
                    }
                },
                'enhanced-glow': {
                    '0%, 100%': { 
                        boxShadow: '0 0 12px rgba(46, 184, 131, 0.4)'
                    },
                    '50%': {
                        boxShadow: '0 0 24px rgba(155, 135, 245, 0.7)'
                    }
                }
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
                'fade-in': 'fade-in 0.5s ease-out',
                'scale-up': 'scale-up 0.3s ease-out',
                'glow': 'glow 2s ease-in-out infinite',
                'slide-in': 'slide-in 0.5s ease-out',
                'border-glow': 'border-glow 2s ease-in-out infinite',
                'float-slow': 'float-slow 3s ease-in-out infinite',
                'enhanced-glow': 'enhanced-glow 3s ease-in-out infinite'
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'hero-pattern': 'linear-gradient(90deg, hsla(277, 75%, 84%, 1) 0%, hsla(297, 50%, 51%, 1) 100%)',
				'money-gradient': 'linear-gradient(90deg, #F97316 0%, #2EB883 100%)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
