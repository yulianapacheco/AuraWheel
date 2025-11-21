# Install required packages (run once)
# install.packages(c("ggplot2", "tidyr"))

library(ggplot2)
library(tidyr)

# Create the data
data <- data.frame(
  intervention = c("Casual Video Games", "Puzzle Games", "Rain/Ambient Sound", "Music"),
  psychological = c(65, 55, 60, 70),
  physiological = c(70, 60, 50, 65),
  comfort = c(60, 70, 85, 80),
  sleep = c(30, 45, 80, 75)
)

# Reshape data for grouped bar chart
data_long <- data %>%
  pivot_longer(cols = -intervention, 
               names_to = "metric", 
               values_to = "value")

# Create bar chart
bar_plot <- ggplot(data_long, aes(x = intervention, y = value, fill = metric)) +
  geom_bar(stat = "identity", position = "dodge", width = 0.7) +
  scale_fill_manual(
    values = c("psychological" = "pink", 
               "physiological" = "violet",
               "comfort" = "beige",
               "sleep" = "#ADD8E6"),
    labels = c("Comfort/Relaxation ↑",
               "Physiological (HR/BP ↓)",
               "Psychological (Stress/Anxiety ↓)",
               "Sleep/Recovery ↑")
  ) +
  labs(
    title = "Mental Well-Being Benefits: Games & Sounds",
    subtitle = "Research-Based Comparison",
    x = "Intervention",
    y = "Effect Size (%)",
    fill = "Metric"
  ) +
  theme_minimal() +
  theme(
    plot.title = element_text(size = 16, face = "bold", hjust = 0.5),
    plot.subtitle = element_text(size = 12, hjust = 0.5),
    axis.text.x = element_text(angle = 15, hjust = 1),
    legend.position = "bottom"
  )

# Display the plot
print(bar_plot)

# Optional: Save the plot
# ggsave("wellbeing_bar_chart.png", plot = bar_plot, 
#        width = 10, height = 6, dpi = 300)