module.exports = {
    publishers: [
        {
            name: '@electron-forge/publisher-github',
            config: {
                repository: {
                    owner: 'AigensTechnology',
                    name: 'aigens-universal-app-electron-uat'
                },
                prerelease: false,
                draft: true,
                authToken: "",
                force: true,
                generateReleaseNotes: true,
                tagPrefix: 'uat'
            }
        }
    ]
}
