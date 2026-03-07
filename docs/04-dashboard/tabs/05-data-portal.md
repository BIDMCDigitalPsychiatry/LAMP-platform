---
slug: "/dashboard/data-portal"
sidebar_position: 5
sidebar_label: Data Portal
title: "Data Portal"
description: "Browse raw data and attach visualizations. Cortex-based analysis is recommended for most use cases."
---

# Data Portal

The Data Portal provides a browser-based interface for querying and exploring data stored on the mindLAMP server.

## Modes

The Data Portal offers two interaction modes:

- **Terminal** — A command-line interface for writing JSONata-style queries directly. Useful for advanced users who want precise control over data retrieval.

![Terminal mode with code editor and Run Query button](../assets/data_portal_terminal.png)

Click "Change Viewing Mode" to switch modes. The Terminal mode selector explains JSONata queries and links to documentation:

![Terminal mode selector dialog](../assets/data_portal_terminal_mode.png)

- **GUI** — A graphical interface for browsing and filtering data without writing code. Navigate to your target level in the left panel, then click the arrow icon or drag and drop a researcher, study, or participant.

![GUI mode showing navigation panel and query instructions](../assets/data_portal_gui.png)

Expanding the navigation and selecting a researcher reveals available tags, data quality graphs, and other pre-rendered visualizations:

![GUI mode with researcher data showing tags, data quality graphs, and activity counts](../assets/data_portal_gui_data.png)

## Limitations

The Data Portal UI is an older feature that has not been actively updated. For more robust data access, consider these alternatives:

- **Per-participant monitoring** through the dashboard's Users tab and Portal view.
- **Python SDK** (`pip install LAMP-core`) for scripted data retrieval and analysis.
- **Cortex** (`pip install lamp-cortex`) for automated feature computation and visualization.
- **Direct API access** for programmatic data retrieval.

## When to Use the Data Portal

The Data Portal remains useful for quick, ad-hoc queries and for users who need to inspect raw data without setting up a programming environment. For systematic data analysis or automated workflows, the Python SDK and Cortex are recommended.
