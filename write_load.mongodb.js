function monitorLag() {
  while (true) {
    const status = rs.status();
    const primary = status.members.find(m => m.state === 1);

    print("\n=== REPLICATION LAG ===");
    print("Time: " + new Date().toISOString());

    status.members.forEach(m => {
      if (m.state === 2 && primary) {
        const lag = Math.round((primary.optimeDate - m.optimeDate) / 1000);
        const lagColor = lag > 5 ? "⚠ " : "✅ ";
        print(`${lagColor} ${m.name}: ${lag} segundos de lag`);
      } else if (m.state === 1) {
        print(`  ${m.name}: PRIMARY`);
      }
    });

    sleep(2000);
  }
}

monitorLag();