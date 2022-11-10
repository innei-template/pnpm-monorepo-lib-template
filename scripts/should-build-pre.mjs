import { spawn } from 'child_process'
import { readdir } from 'fs/promises'
import path from 'path'

async function main() {
  const packageDir = path.resolve(
    import.meta.url.replace('file://', ''),
    '../../packages',
  )

  const packages = await readdir(packageDir)

  let shouldBuild = false
  for (const pkg of packages) {
    const hasDist = await readdir(path.resolve(packageDir, pkg, 'dist')).catch(
      () => {
        return []
      },
    )
    if (hasDist.length === 0) {
      shouldBuild = true
      break
    }
  }

  if (shouldBuild) {
    const stream = spawn(`turbo`, ['run', 'package'])
    stream.stdout.on('data', (data) => {
      console.log(data.toString())
    })
    stream.stderr.on('data', (data) => {
      console.error(data.toString())
    })
  }
}

main()
