import React, { ReactNode } from 'react'

interface props {
  variant: string,
  children: ReactNode
}

const Typography = ({ variant, children }: props ) => {
  
  const styles: Record<string, string> = {
    h1: "text-3xl antialiased text-",
    h2: "text-2xl antialiased",
    h3: "text-xl antialiased",
    h4: "text-lg antialiased",
    h5: "text-base antialiased",
    h6: "text-sm antialiased",
    subtl: "text-base antialiased",
    content: "text-base antialiased",
    muted: "text-base antialiased",
    code: "font-mono text-base antialiased bg-neutral-500/70 p-[3px] pl-[8px] rounded-xs"
  }

  switch (variant) {
    case "h1": return (<h1 className={styles.h1}>{children}</h1>)
    case "h2": return (<h2 className={styles.h2}>{children}</h2>)
    case "h3": return (<h3 className={styles.h3}>{children}</h3>)
    case "h4": return (<h4 className={styles.h4}>{children}</h4>)
    case "h5": return (<h5 className={styles.h5}>{children}</h5>)
    case "h6": return (<h6 className={styles.h6}>{children}</h6>)
    case "subtl": return (<p className={styles.subtl}>{children}</p>)
    case "content": return (<p className={styles.content}>{children}</p>)
    case "muted": return (<p className={styles.muted}>{children}</p>)
    case "code": return (<code className={styles.code}>{children}</code>)
    default: return (<p>{children}</p>)
  }
}

export default Typography