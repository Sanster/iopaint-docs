import Image from "next/image"
import Link from "next/link"

interface MyProject {
  title: string
  description: string
  link: string
  image: string
}

const projects: MyProject[] = [
  {
    title: "ByePhotos",
    description:
      "An iOS app that helps you quickly find similar photos and compress large videos to free up space on your iPhone and iCloud.",
    link: "https://apps.apple.com/us/app/byephotos-storage-cleanup/id6737446757",
    image: "/myprojects/ByePhotos.jpg",
  },
  {
    title: "OptiClean",
    description:
      "An iOS/macOS app that removes unwanted objects from photos using AI, run model fully on device.",
    link: "https://apps.apple.com/ca/app/opticlean-ai-object-remover/id6452387177",
    image: "/myprojects/opticlean.png",
  },
]

export default function MyProjects() {
  return (
    <div
      style={{
        top: "1.5rem",
        right: "4rem",
        marginTop: "3rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.25rem",
      }}
    >
      <div
        style={{
          marginBottom: "0.375rem",
          color: "#6b7280",
        }}
      >
        My other works
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        {projects.map((project) => (
          <Link
            target="_blank"
            href={project.link}
            key={project.title}
            style={{
              display: "block",
              padding: "0.75rem",
              border: "1px solid #e5e5e5",
              borderRadius: "0.75rem",
              textDecoration: "none",
              color: "inherit",
              transition: "border-color 0.2s",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <div
                style={{
                  fontSize: "1.125rem",
                  fontWeight: "600",
                }}
              >
                {project.title}
              </div>
              <div
                style={{
                  position: "relative",
                  height: "4rem",
                  flexShrink: 0,
                }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  style={{
                    objectFit: "cover",
                    borderRadius: "0.75rem",
                  }}
                />
              </div>
              <p
                style={{
                  fontSize: "0.875rem",
                  color: "#666",
                }}
              >
                {project.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
