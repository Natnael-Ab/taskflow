const supportedNodeMajor = 24;
const minimumNodeMinor = 17;
const supportedNpmMajor = 11;

function parseVersion(version) {
  const normalizedVersion = version.replace(/^v/, "");
  const [major, minor, patch] = normalizedVersion.split(".").map(Number);

  if (
    !Number.isInteger(major) ||
    !Number.isInteger(minor) ||
    !Number.isInteger(patch)
  ) {
    throw new Error(`Unable to parse version "${version}".`);
  }

  return {
    major,
    minor,
    patch,
  };
}

function readNpmVersion() {
  const userAgent = process.env.npm_config_user_agent;

  if (!userAgent) {
    return null;
  }

  const npmEntry = userAgent
    .split(" ")
    .find((entry) => entry.startsWith("npm/"));

  return npmEntry?.replace("npm/", "") ?? null;
}

function verifyNodeVersion() {
  const currentVersion = parseVersion(process.version);
  const hasSupportedMajor = currentVersion.major === supportedNodeMajor;
  const hasSupportedMinor =
    currentVersion.major === supportedNodeMajor &&
    currentVersion.minor >= minimumNodeMinor;

  if (!hasSupportedMajor || !hasSupportedMinor) {
    console.error(
      [
        `TaskFlow requires Node.js ${supportedNodeMajor}.${minimumNodeMinor}.0 or newer within Node.js ${supportedNodeMajor}.`,
        `Current version: ${process.version}.`,
        "Run `nvm use` from the repository root and try again.",
      ].join("\n"),
    );

    process.exit(1);
  }
}

function verifyNpmVersion() {
  const npmVersion = readNpmVersion();

  if (!npmVersion) {
    return;
  }

  const currentVersion = parseVersion(npmVersion);

  if (currentVersion.major !== supportedNpmMajor) {
    console.error(
      [
        `TaskFlow requires npm ${supportedNpmMajor}.`,
        `Current version: npm ${npmVersion}.`,
        `Run \`npm install --global npm@${supportedNpmMajor}\` and try again.`,
      ].join("\n"),
    );

    process.exit(1);
  }
}

verifyNodeVersion();
verifyNpmVersion();

console.log(
  `Environment verified: ${process.version} with npm ${readNpmVersion() ?? "unknown"}.`,
);
