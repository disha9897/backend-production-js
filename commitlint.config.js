module.exports = {
    extends: ["@commitlint/cli", "@commitlint/config-conventional"], 
    rules: {
        "type-enum":[2,
            "always",
            [
                "feat",          // we use when we use the features then use this prefix
                "fix",          // fix the bugs
                "docs",         // prefix for documentation
                "style",        // prefix for css
                "refector",     
                "perf",         // performance improvement
                "test",
                "build",
                "ci",
                "chore",            // used to update dependency
                "revert"            // to revert the code
            ]
        ],
        "subject-case": [2, "always", "sentence-case"]
    }
}
