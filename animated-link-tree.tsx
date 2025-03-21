"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Terminal,
  Github,
  Twitter,
  Instagram,
  Linkedin,
  Globe,
  ExternalLink,
  Moon,
  Sun,
  Code,
  Hash,
  Database,
  MessageSquare,
} from "lucide-react"
import { cn } from "@/lib/utils"
import type { JSX } from "react"

interface LinkItem {
  title: string
  url: string
  icon: JSX.Element
  color: string
  description?: string
}

export default function AnimatedLinkTree() {
  const [darkMode, setDarkMode] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Example links - customize these with your own
  const links: LinkItem[] = [
    {
      title: "Portfolio 🚀",
      url: "#",
      icon: <Globe className="h-5 w-5" />,
      color: "from-emerald-400 to-teal-500",
      description: "Building something awesome... ETA: When it's ready 😉",
    },
    {
      title: "GitHub",
      url: "https://github.com/root-Akira",
      icon: <Github className="h-5 w-5" />,
      color: "from-violet-400 to-purple-500",
    },
    {
      title: "LinkedIn",
      url: "https://linkedin.com/in/sunny-singh-1318a4290",
      icon: <Linkedin className="h-5 w-5" />,
      color: "from-blue-500 to-indigo-600",
    },
    {
      title: "Twitter",
      url: "https://x.com/with_AK1RA",
      icon: <Twitter className="h-5 w-5" />,
      color: "from-blue-400 to-cyan-500",
    },
    {
      title: "Instagram",
      url: "https://www.instagram.com/with_ak1ra?igsh=bGZmeTV0ZGVvcHh5",
      icon: <Instagram className="h-5 w-5" />,
      color: "from-pink-400 to-rose-500",
    },
    {
      title: "Telegram",
      url: "http://t.me/With_AK1RA",
      icon: <MessageSquare className="h-5 w-5" />,
      color: "from-blue-400 to-sky-500",
    },
    {
      title: "Blog 📝",
      url: "#",
      icon: <Terminal className="h-5 w-5" />,
      color: "from-amber-400 to-orange-500",
      description: "Brewing tech stories... Loading... ⌛",
    },
  ]

  // Handle theme toggle
  const toggleTheme = () => {
    setDarkMode(!darkMode)
    if (typeof window !== "undefined") {
      localStorage.setItem("darkMode", (!darkMode).toString())
    }
  }

  // Initialize theme from localStorage
  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem("darkMode")
    if (savedTheme) {
      setDarkMode(savedTheme === "true")
    } else {
      // Check system preference
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
      setDarkMode(prefersDark)
    }
  }, [])

  // Apply dark mode class to body
  useEffect(() => {
    if (mounted) {
      document.documentElement.classList.toggle("dark", darkMode)
    }
  }, [darkMode, mounted])

  if (!mounted) return null

  return (
    <div
      className={cn(
        "min-h-screen w-full transition-colors duration-500 flex flex-col items-center justify-center p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20",
        darkMode ? "dark bg-gray-900" : "bg-gray-50",
      )}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 lg:top-8 lg:right-8 z-50"
      >
        <button
          onClick={toggleTheme}
          className="p-2 sm:p-3 rounded-full bg-opacity-20 backdrop-blur-sm bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-opacity-30 transition-all duration-300 shadow-lg"
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {darkMode ? (
            <motion.div
              initial={{ rotate: -30, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Sun className="h-5 w-5 sm:h-6 sm:w-6" />
            </motion.div>
          ) : (
            <motion.div
              initial={{ rotate: 30, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Moon className="h-5 w-5 sm:h-6 sm:w-6" />
            </motion.div>
          )}
        </button>
      </motion.div>

      <div className="w-full max-w-md mx-auto sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl relative z-10">
        {/* Welcome Message */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-center mb-8"
        >
          <motion.h2 
            className="text-xl sm:text-2xl md:text-3xl text-gray-700 dark:text-gray-300 font-light"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Welcome to{" "}
            <span className="font-bold bg-gradient-to-r from-teal-500 to-emerald-500 bg-clip-text text-transparent">
              AK1RA
            </span>{" "}
            digital space!
          </motion.h2>
        </motion.div>

        {/* Profile Section */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-center mb-8 sm:mb-10 md:mb-12"
        >
          <motion.div
            whileHover={{ scale: 1.05, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden mb-4 sm:mb-5 md:mb-6 ring-4 ring-opacity-50 dark:ring-opacity-30 ring-teal-500 dark:ring-teal-400 p-1 bg-gradient-to-br from-teal-400 to-emerald-500"
          >
            <img
              src="/myAvatar.png"
              alt="AK1RA Profile"
              className="w-full h-full object-cover rounded-full bg-white dark:bg-gray-800"
            />
          </motion.div>
          <motion.h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2 text-gray-800 dark:text-gray-100">
            Sunny Singh
          </motion.h1>
          <motion.p className="text-gray-600 dark:text-gray-300 text-center max-w-xs sm:max-w-sm md:max-w-md text-sm sm:text-base md:text-lg">
            AK1RA | Web3 Enthusiast | Linux Enthusiast | Blockchain Event Manager | Discord Server Designer | Social Media
            Manage | Founding Member of @campustocrypto
          </motion.p>
        </motion.div>

        {/* Links Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="space-y-3 sm:space-y-4 md:space-y-5"
        >
          <AnimatePresence>
            {links.map((link, index) => (
              <motion.div
                key={link.title}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 50, opacity: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                }}
                whileHover={{
                  scale: 1.03,
                  y: -4,
                  transition: { duration: 0.2, type: "spring", stiffness: 400 },
                }}
                whileTap={{ scale: 0.97 }}
              >
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "flex items-center p-4 sm:p-5 rounded-xl backdrop-blur-sm bg-white bg-opacity-70 dark:bg-gray-800 dark:bg-opacity-50",
                    "border border-gray-200 dark:border-gray-700",
                    "shadow-sm hover:shadow-xl transition-all duration-300",
                    "group",
                    link.url === "#" ? "cursor-not-allowed" : ""
                  )}
                >
                  <div
                    className={cn(
                      "mr-3 sm:mr-4 p-2 sm:p-3 rounded-lg bg-gradient-to-br",
                      link.color,
                      "text-white transform group-hover:rotate-3 transition-transform duration-300",
                    )}
                  >
                    {link.icon}
                  </div>
                  <div className="flex-1">
                    <span className="font-medium text-gray-800 dark:text-gray-100 text-base sm:text-lg md:text-xl">
                      {link.title}
                    </span>
                    {link.description && (
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        {link.description}
                      </p>
                    )}
                  </div>
                  <motion.div initial={{ x: 0 }} whileHover={{ x: 3 }} transition={{ duration: 0.2 }}>
                    {link.url === "#" ? (
                      <span className="text-xs font-medium px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400">
                        Soon™
                      </span>
                    ) : (
                      <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 dark:text-gray-500 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors" />
                    )}
                  </motion.div>
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="mt-12 sm:mt-16 text-center text-sm sm:text-base text-gray-500 dark:text-gray-400"
        >
          <p>© 2025 Sunny Singh (AK1RA)</p>
          <p className="mt-1 text-xs sm:text-sm">Made with ❤️ and modern web tech</p>
        </motion.div>
      </div>

      {/* Background Elements - Blockchain & Linux Theme */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent to-teal-50 dark:to-teal-950 opacity-40"></div>

        {/* Blockchain Nodes and Connections */}
        <svg className="absolute inset-0 w-full h-full opacity-5 dark:opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path
                d="M 50 0 L 0 0 0 50"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-gray-500 dark:text-gray-300"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Animated Blockchain Nodes */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`node-${i}`}
              className={`absolute rounded-full bg-gradient-to-r ${
                i % 2 === 0
                  ? "from-teal-400 to-blue-500 dark:from-teal-700 dark:to-blue-800"
                  : "from-purple-400 to-pink-500 dark:from-purple-800 dark:to-pink-900"
              } opacity-20 dark:opacity-30 shadow-lg`}
              style={{
                width: `${20 + i * 5}px`,
                height: `${20 + i * 5}px`,
                left: `${10 + i * 15}%`,
                top: `${15 + i * 12}%`,
              }}
              animate={{
                x: [0, 20, 0, -20, 0],
                y: [0, -20, 0, 20, 0],
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Linux Terminal Elements */}
        <div className="absolute bottom-0 left-0 w-full h-1/3 overflow-hidden opacity-5 dark:opacity-10 font-mono text-xs sm:text-sm md:text-base">
          <motion.div initial={{ y: 100 }} animate={{ y: 0 }} transition={{ duration: 2, delay: 1 }}>
            <div className="text-gray-700 dark:text-gray-300 ml-4 mt-2">$ cd /home/user</div>
            <div className="text-gray-700 dark:text-gray-300 ml-4 mt-1">$ ls -la</div>
            <div className="text-gray-700 dark:text-gray-300 ml-4 mt-1">total 32</div>
            <div className="text-gray-700 dark:text-gray-300 ml-4 mt-1">drwxr-xr-x 5 user user 4096 Mar 21 14:30 .</div>
            <div className="text-gray-700 dark:text-gray-300 ml-4 mt-1">
              drwxr-xr-x 22 user user 4096 Mar 21 14:15 ..
            </div>
            <div className="text-gray-700 dark:text-gray-300 ml-4 mt-1">
              -rw-r--r-- 1 user user 220 Mar 21 13:45 .bash_logout
            </div>
            <div className="text-gray-700 dark:text-gray-300 ml-4 mt-1">
              -rw-r--r-- 1 user user 3771 Mar 21 13:45 .bashrc
            </div>
            <div className="text-gray-700 dark:text-gray-300 ml-4 mt-1">
              drwxr-xr-x 3 user user 4096 Mar 21 14:00 .config
            </div>
            <div className="text-gray-700 dark:text-gray-300 ml-4 mt-1">
              -rw-r--r-- 1 user user 807 Mar 21 13:45 .profile
            </div>
            <div className="text-gray-700 dark:text-gray-300 ml-4 mt-1">$ node app.js</div>
            <div className="text-green-600 dark:text-green-400 ml-4 mt-1">Server running on port 3000</div>
            <div className="text-green-600 dark:text-green-400 ml-4 mt-1">Connected to blockchain network</div>
          </motion.div>
        </div>

        {/* Blockchain Hash Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 overflow-hidden opacity-5 dark:opacity-10 font-mono text-xs">
          <motion.div initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 2, delay: 1.5 }}>
            <div className="text-gray-700 dark:text-gray-300 mr-4 mt-2">0x7f9e8d7c6b5a4321</div>
            <div className="text-gray-700 dark:text-gray-300 mr-4 mt-1">0x1a2b3c4d5e6f7890</div>
            <div className="text-gray-700 dark:text-gray-300 mr-4 mt-1">0xabcdef0123456789</div>
            <div className="text-gray-700 dark:text-gray-300 mr-4 mt-1">0x9876543210fedcba</div>
          </motion.div>
        </div>

        {/* Animated Circles */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-r from-purple-300 to-pink-300 dark:from-purple-900 dark:to-pink-900 opacity-10 dark:opacity-20 blur-3xl"
          animate={{
            x: [0, 30, 0, -30, 0],
            y: [0, -30, 0, 30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-1/3 right-1/4 w-96 h-96 sm:w-[30rem] sm:h-[30rem] md:w-[40rem] md:h-[40rem] rounded-full bg-gradient-to-r from-blue-300 to-teal-300 dark:from-blue-900 dark:to-teal-900 opacity-10 dark:opacity-20 blur-3xl"
          animate={{
            x: [0, -40, 0, 40, 0],
            y: [0, 40, 0, -40, 0],
          }}
          transition={{
            duration: 30,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />

        {/* Blockchain Connection Lines */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute bg-gradient-to-r from-teal-500 to-blue-500 dark:from-teal-700 dark:to-blue-700 opacity-10 dark:opacity-20 h-px"
            style={{
              width: `${100 + i * 50}px`,
              transform: `rotate(${45 * i}deg)`,
              left: `${10 + i * 10}%`,
              top: `${20 + i * 8}%`,
              transformOrigin: "left center",
            }}
            animate={{
              opacity: [0.1, 0.2, 0.1],
              width: [`${100 + i * 50}px`, `${150 + i * 50}px`, `${100 + i * 50}px`],
            }}
            transition={{
              duration: 8 + i,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Floating Blockchain Icons */}
      <div className="fixed inset-0 -z-5 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`icon-${i}`}
            className="absolute text-gray-300 dark:text-gray-700 opacity-10"
            style={{
              left: `${15 + i * 20}%`,
              top: `${10 + i * 15}%`,
            }}
            animate={{
              y: [0, 20, 0],
              rotate: [0, 10, 0, -10, 0],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            {i % 3 === 0 ? (
              <Code size={24 + i * 4} />
            ) : i % 3 === 1 ? (
              <Hash size={24 + i * 4} />
            ) : (
              <Database size={24 + i * 4} />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

