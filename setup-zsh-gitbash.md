# Setting Up Zsh with Git Bash on Windows

## Prerequisites
- Git for Windows installed (download from https://git-scm.com/download/win)

## Installation Steps

### Option 1: Using MSYS2 Packages (Recommended)

1. **Download Zsh binary for Windows:**
   - Visit: https://packages.msys2.org/package/zsh
   - Download the zsh package (zsh-*-x86_64.pkg.tar.zst)

2. **Extract to Git Bash directory:**
   ```bash
   # Typical Git Bash location
   C:\Program Files\Git\usr\bin
   ```

3. **Add Zsh to your Git Bash:**
   - Extract the downloaded package
   - Copy the `zsh.exe` and related files to `C:\Program Files\Git\usr\bin`

### Option 2: Quick Setup Script

Create a `.bashrc` file in your home directory that launches Zsh:

```bash
# In Git Bash, run:
echo 'exec zsh' >> ~/.bashrc
```

### Option 3: Use Chocolatey (Easiest)

If you have Chocolatey installed:

```powershell
choco install zsh
```

## Configure Zsh

1. **Create .zshrc file:**
   ```bash
   touch ~/.zshrc
   ```

2. **Install Oh My Zsh (optional but recommended):**
   ```bash
   sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
   ```

## Set Zsh as Default Shell in Git Bash

Add to your `~/.bashrc`:
```bash
if [ -t 1 ]; then
  exec zsh
fi
```

## Verify Installation

```bash
zsh --version
```

## Troubleshooting

- If Zsh doesn't start, check that `zsh.exe` is in your PATH
- Make sure Git Bash can find the Zsh executable
- You may need to restart Git Bash after installation
