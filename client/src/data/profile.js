export const profileData = {
  en: {
    nav: {
      home: "Home",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact"
    },
    hero: {
      headline: "Architecting robust backend systems and modern web experiences.",
      highlight: "backend systems",
      description: [
        "I am a Software Developer dedicated to engineering resilient backend systems and dynamic web applications.",
        "Specializing in the Java/Spring Boot ecosystem, I design scalable APIs, implement event-driven architectures, and build AI-enhanced platforms.",
        "I thrive in collaborative agile environments, bringing a complex problem-solving mindset and a commitment to continuous learning to every phase of the software development lifecycle."
      ],
      buttons: {
        contact: "Get In Touch",
        cv: "Download CV"
      }
    },
    projects: {
      title: "PROJECTS",
      items: [
        {
          name: "AI-powered Event Management System",
          role: "Leader",
          duration: "4 months",
          github: "https://github.com/lehoanganh75/Event-Management-Portal",
          demo: "https://fitiuh-events.io.vn",
          description: [
            "Designed and implemented all core backend features for event and participant management.",
            "Implemented role-based access control using JWT authentication.",
            "Integrated AI-powered planning and post-event analysis using Gemini and Ollama with RAG vector search techniques.",
            "Integrated WebSocket for real-time chat and notifications.",
            "Containerized the application using Docker & Docker Compose for streamlined deployment."
          ],
          image: "https://res.cloudinary.com/ddga6y6tm/image/upload/v1780143684/Untitled_pfkgie.png",
          technologies: ["Spring Boot", "ReactJS", "MariaDB", "MongoDB", "Redis", "Docker", "Docker Compose", "JWT", "RESTful API", "WebSocket", "Gemini", "Ollama"]
        },
        {
          name: "Zala - Multi-platform Messaging System",
          role: "Member",
          demo: "https://host-frontend-mu.vercel.app/",
          github: "https://github.com/orgs/IUH-CNM-TEAM08/repositories",
          description: [
            "Developed a multi-platform messaging application supporting real-time user interaction.",
            "Implemented secure authentication and user management using JWT.",
            "Built robust real-time chat functionality using WebSocket (Socket.IO).",
            "Designed responsive UI components using ReactJS and Tailwind CSS."
          ],
          image: "https://res.cloudinary.com/ddga6y6tm/image/upload/v1780143743/Untitled_vnchqe.png",
          technologies: ["Node.js", "TypeScript", "React Native", "Expo", "Socket.IO", "WebRTC", "LiveKit", "Kafka", "MongoDB", "Redis", "Docker", "AWS", "DigitalOcean", "Nginx", "GitHub Actions", "Vercel", "SePay"]
        },
        {
          name: "Workspace / Task Management Application",
          role: "Member",
          github: ["https://github.com/hamanhcuong18112004/project-management-system-frontend", "https://github.com/MACHNGOCXUAN/project-management-system-backend"],
          description: [
            "Collaborated with cross-functional team members via Git/GitHub to develop a workspace and task management application designed to track team progress.",
            "Implemented RESTful APIs for board creation, task management, and workflow tracking.",
            "Secured API endpoints using JWT authentication.",
            "Integrated a robust database architecture to handle complex project data."
          ],
          demo: "https://app.dangcapnhatvietnam.site/",
          image: "https://res.cloudinary.com/ddga6y6tm/image/upload/v1780143763/Untitled_mshirs.png",
          technologies: ["ReactJS", "Spring Boot", "RESTful API", "JWT", "MongoDB", "MySQL"]
        }
      ]
    },
    experience: {
      title: "EXPERIENCE",
      items: [
        {
          company: "Industrial University of Ho Chi Minh City - IUH",
          role: "Software Engineering Student",
          period: "2022 - Present",
          description: "4th-year student majoring in Software Engineering, focusing on web application development, backend systems, RESTful APIs, and software architecture."
        },
        {
          company: "AI-powered Event Management System",
          role: "Project Leader",
          period: "4 months",
          description: "Coordinated tasks, managed project timelines, and led a 2-member team to develop and deploy an event management platform with AI-powered features, QR attendance, statistics, realtime chat, notification, and role-based access control."
        },
        {
          company: "Scientific Research SSRC-I-2026",
          role: "Research Participant",
          period: "2026",
          description: "Participated in scientific research related to event management systems, AI-powered event planning, participant interaction, and post-event data analysis."
        }
      ]
    },
    contact: {
      title: "Contact",
      description: "Feel free to contact me for internship opportunities, collaboration, or software development projects.",
      fields: {
        name: "Name",
        email: "Email",
        message: "Message"
      },
      button: "Send Message",
      successMessage: "Message sent successfully!",
      errorMessage: "Failed to send message."
    },
    footer: {
      copyright: "© 2026 Le Hoang Anh. All rights reserved."
    }
  },
  vi: {
    nav: {
      home: "Trang chủ",
      projects: "Dự án",
      experience: "Kinh nghiệm",
      contact: "Liên hệ"
    },
    hero: {
      headline: "Kiến trúc các hệ thống backend mạnh mẽ và trải nghiệm web hiện đại.",
      highlight: "hệ thống backend",
      description: [
        "Tôi là một Lập trình viên Phần mềm (Software Developer) đam mê xây dựng các hệ thống backend bền bỉ và ứng dụng web động.",
        "Chuyên môn về hệ sinh thái Java/Spring Boot, tôi thiết kế các API linh hoạt, triển khai kiến trúc hướng sự kiện, và xây dựng các nền tảng tích hợp AI.",
        "Tôi phát huy tối đa khả năng trong các môi trường làm việc nhóm (Agile), luôn mang theo tư duy giải quyết vấn đề phức tạp và tinh thần học hỏi không ngừng vào mọi giai đoạn của vòng đời phát triển phần mềm."
      ],
      buttons: {
        contact: "Liên hệ",
        cv: "Tải CV"
      }
    },
    projects: {
      title: "DỰ ÁN",
      items: [
        {
          name: "Hệ thống quản lý sự kiện tích hợp AI",
          role: "Leader",
          duration: "4 tháng",
          github: "https://github.com/lehoanganh75/Event-Management-Portal",
          demo: "https://fitiuh-events.io.vn",
          description: [
            "Thiết kế và xây dựng các tính năng backend cốt lõi cho quản lý sự kiện và người tham gia.",
            "Triển khai xác thực người dùng và phân quyền (Role-based access control) bằng JWT.",
            "Tích hợp tính năng lập kế hoạch và phân tích sự kiện bằng AI (Gemini, Ollama) với kỹ thuật tìm kiếm RAG vector.",
            "Tích hợp WebSocket cho tính năng chat và thông báo thời gian thực.",
            "Đóng gói ứng dụng (Containerization) bằng Docker & Docker Compose để tối ưu triển khai."
          ],
          image: "https://res.cloudinary.com/ddga6y6tm/image/upload/v1780143684/Untitled_pfkgie.png",
          technologies: ["Spring Boot", "ReactJS", "MariaDB", "MongoDB", "Redis", "Docker", "Docker Compose", "JWT", "RESTful API", "WebSocket", "Gemini", "Ollama"]
        },
        {
          name: "Zala - Hệ thống nhắn tin đa nền tảng",
          role: "Member",
          demo: "https://host-frontend-mu.vercel.app/",
          github: "https://github.com/orgs/IUH-CNM-TEAM08/repositories",
          description: [
            "Phát triển ứng dụng nhắn tin đa nền tảng hỗ trợ tương tác thời gian thực.",
            "Triển khai tính năng xác thực và quản lý người dùng bảo mật bằng JWT.",
            "Xây dựng tính năng chat realtime ổn định bằng WebSocket (Socket.IO).",
            "Thiết kế giao diện người dùng đáp ứng (responsive UI) bằng ReactJS và Tailwind CSS."
          ],
          image: "https://res.cloudinary.com/ddga6y6tm/image/upload/v1780143743/Untitled_vnchqe.png",
          technologies: ["Node.js", "TypeScript", "React Native", "Expo", "Socket.IO", "WebRTC", "LiveKit", "Kafka", "MongoDB", "Redis", "Docker", "AWS", "DigitalOcean", "Nginx", "GitHub Actions", "Vercel", "SePay"]
        },
        {
          name: "Ứng dụng quản lý công việc / Workspace",
          role: "Member",
          github: ["https://github.com/hamanhcuong18112004/project-management-system-frontend", "https://github.com/MACHNGOCXUAN/project-management-system-backend"],
          description: [
            "Phối hợp chặt chẽ với team qua Git/GitHub để xây dựng ứng dụng không gian làm việc và quản lý công việc để theo dõi tiến độ nhóm.",
            "Triển khai RESTful API cho việc tạo bảng (boards), quản lý nhiệm vụ và quy trình làm việc.",
            "Bảo mật các endpoint của API bằng xác thực JWT.",
            "Tích hợp kiến trúc cơ sở dữ liệu mạnh mẽ để xử lý dữ liệu dự án phức tạp."
          ],
          demo: "https://app.dangcapnhatvietnam.site/",
          image: "https://res.cloudinary.com/ddga6y6tm/image/upload/v1780143763/Untitled_mshirs.png",
          technologies: ["ReactJS", "Spring Boot", "RESTful API", "JWT", "MongoDB", "MySQL"]
        }
      ]
    },
    experience: {
      title: "KINH NGHIỆM",
      items: [
        {
          company: "Đại học Công nghiệp TP. Hồ Chí Minh - IUH",
          role: "Sinh viên ngành Kỹ thuật phần mềm",
          period: "2022 - Hiện tại",
          description: "Sinh viên năm 4 ngành Kỹ thuật phần mềm, tập trung vào phát triển ứng dụng web, hệ thống backend, RESTful API và kiến trúc phần mềm."
        },
        {
          company: "Hệ thống quản lý sự kiện tích hợp AI",
          role: "Project Leader",
          period: "4 tháng",
          description: "Phân chia công việc, quản lý tiến độ và dẫn dắt nhóm 2 thành viên phát triển và triển khai nền tảng quản lý sự kiện với các chức năng AI, QR điểm danh, thống kê, chat realtime, notification và phân quyền người dùng."
        },
        {
          company: "Nghiên cứu khoa học SSRC-I-2026",
          role: "Thành viên tham gia nghiên cứu",
          period: "2026",
          description: "Tham gia nghiên cứu khoa học liên quan đến hệ thống quản lý sự kiện, AI hỗ trợ lập kế hoạch, tương tác người tham gia và phân tích dữ liệu sau sự kiện."
        }
      ]
    },
    contact: {
      title: "Liên hệ",
      description: "Có thể liên hệ với tôi cho cơ hội thực tập, hợp tác hoặc các dự án phát triển phần mềm.",
      fields: {
        name: "Họ tên",
        email: "Email",
        message: "Nội dung"
      },
      button: "Gửi tin nhắn",
      successMessage: "Tin nhắn đã được gửi thành công!",
      errorMessage: "Gửi tin nhắn thất bại."
    },
    footer: {
      copyright: "© 2026 Lê Hoàng Anh. Đã đăng ký bản quyền."
    }
  }
};

export const personalInfo = {
  name: "Le Hoang Anh",
  phone: "0328013079",
  email: "lehoanganh7524@gmail.com",
  github: "https://github.com/lehoanganh75",
  linkedin: "https://www.linkedin.com/in/lehoanganh-undefined-789857412/",
  address: "District 12, Ho Chi Minh City, Vietnam",
  university: "Industrial University of Ho Chi Minh City - IUH",
  major: "Software Engineering",
  year: "4th-year student"
};
