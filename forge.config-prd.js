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
                authToken: "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",
                force: true,
                generateReleaseNotes: true,
                tagPrefix: 'prd'
            }
        }
    ]
}
