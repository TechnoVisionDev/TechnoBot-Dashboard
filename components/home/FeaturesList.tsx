import styles from './FeaturesList.module.css';

function FeaturesList() {
    return (
        <section className={styles.info}>
            <div className={styles.feature}>
                <div>
                    <h2>Leveling and Reputation Systems</h2>
                    <p>Keep your members engaged with a highly customizable leveling and Reputation
                        system. By sending chat messages, members can earn ranks and customize their
                        profiles to build a lasting reputation on your server!
                    </p>
                </div>
                <img src="/assets/home/leveling.png" alt="leveling interface" />
            </div>
            <div className={styles.feature}>
                <div>
                    <h2>Custom Greetings & Auto-Roles</h2>
                    <p>TechnoBot can welcome new server members with personalized join, farewell, and
                        DM messages. You can even set custom roles to give to new members!
                    </p>
                </div>
                <img src="/assets/home/welcome.png" alt="greetings interface" />
            </div>
            <div className={styles.feature}>
                <div>
                    <h2>Music Integration</h2>
                    <p>Play music in real time with your friends through voice chat. Search for songs,
                        build a rockin playlist, and jam out to your favorite tunes with our advanced
                        music player.
                    </p>
                </div>
                <img src="/assets/home/music.png" alt="music interface" />
            </div>
            <div className={styles.feature}>
                <div>
                    <h2>Economy, Shops, and Gambling</h2>
                    <p>Create a digital economy for your server, complete with jobs, crime,
                        shopping, and even a casino. You can even set up your own store to sell
                        custom items and perks!
                    </p>
                </div>
                <img src="/assets/home/economy.png" alt="economy interface" />
            </div>
            <div className={styles.feature}>
                <div>
                    <h2>Advanced Moderation Tools</h2>
                    <p>Deal out punishments, automatically log important changes to your server,
                        and set important auto-moderation routines to manage tasks for you. TechnoBot&apos;s
                        staff tools allow you to easily manage a server of any size!
                    </p>
                </div>
                <img src="/assets/home/moderation.png" alt="moderation interface" />
            </div>
            <div className={styles.feature}>
                <div>
                    <h2>Suggestions</h2>
                    <p>Listen, curate, and respond to feedback with our powerful suggestion system.
                        Members can vote for their favorite poposals and staff responses in real time,
                        making community feedback fun and engaging.
                    </p>
                </div>
                <img src="/assets/home/suggestions.png" alt="suggestions interface" />
            </div>
            <div className={styles.feature}>
                <div>
                    <h2>Starboard</h2>
                    <p>The starboard is a community leaderboard that allows your members to share and
                        upvote custom content. Your members will love sharing pictures and videos to
                        see how many stars they can earn!
                    </p>
                </div>
                <img src="/assets/home/starboard.png" alt="starboard interface" />
            </div>
            <div className={styles.feature}>
                <div>
                    <h2>Reaction Roles</h2>
                    <p>Set highly customizable reaction roles for your server! Reaction roles can make
                        even the most complex servers easy to navigate and highly professional.
                    </p>
                </div>
                <img src="/assets/home/reaction roles.png" alt="reaction roles interface" />
            </div>
            <div className={styles.feature}>
                <div>
                    <h2>Ticket System</h2>
                    <p>Create a ticket system that allows your members to communicate with staff
                        quickly and privately. Perfect for customer support, ban appeals, or general
                        inquiries.
                    </p>
                </div>
                <img src="/assets/home/tickets.png" alt="Tickets interface" />
            </div>
        </section>
    );
}

export default FeaturesList;