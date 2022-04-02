const NavbarDefaults = {
    title: 'Vercel',
    navItems: [
        {
            text: 'Features',
            children: [
                {
                    text: 'Previews',
                    desc: 'Workflow for the modern web'
                },
                {
                    text: 'Previews',
                    desc: 'Workflow for the modern web'
                },
                {
                    text: 'Previews',
                    desc: 'Workflow for the modern web'
                },
                {
                    text: 'Previews',
                    desc: 'Workflow for the modern web'
                },
                {
                    text: 'Previews',
                    desc: 'Workflow for the modern web'
                },
                {
                    text: 'Previews',
                    desc: 'Workflow for the modern web'
                }
            ]
        },
        {
            text: 'Templates',
            link: '#'
        },
        {
            text: 'Integrations',
            link: '#'
        },
        {
            text: 'Customers',
            link: '#'
        },
        {
            text: 'Pricing',
            link: '#'
        }
    ],
    navActions: [
        {
            text: 'Contact',
            isButton: false
        },
        {
            text: 'Login',
            isButton: false
        },
        {
            text: 'Sign Up',
            isButton: true,
            primaryButton: true
        }
    ]
}

export default NavbarDefaults