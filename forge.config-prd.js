module.exports = {
    publishers: [
        {
            name: '@electron-forge/publisher-github',
            config: {
                repository: {
                    owner: 'AigensTechnology',
                    name: 'aigens-universal-app-electron'
                },
                prerelease: false,
                draft: true,
                authToken: "",
                force: true,
                generateReleaseNotes: true,
                tagPrefix: 'prd'
            }
        }
    ]
}
