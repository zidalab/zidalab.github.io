# -*- coding: utf-8 -*-
"""
Created on Tue Aug 20 10:25:56 2024

@author: Zida Li
"""

import numpy as np
import matplotlib.pyplot as plt
import pandas as pd

def generate_bead_enzyme_status(num_beads=80000, lambda_param=1.0):
    """
    Generate the enzyme attachment status for a number of beads.
    """
    enzyme_counts = np.random.poisson(lambda_param, num_beads)
    enzyme_presence = enzyme_counts > 0
    return enzyme_presence.tolist()

def encapsulate_beads_into_droplets(bead_statuses, beads_per_droplet_lambda=2.0):
    """
    Encapsulate beads into droplets, returning a True/False status for each droplet.
    The droplet status is True if at least one bead in the droplet is True.
    """
    droplet_statuses = []
    droplet_bead_nums = []
    current_bead_index = 0
    
    while current_bead_index < len(bead_statuses):
        # Generate the number of beads for this droplet
        num_beads = np.random.poisson(beads_per_droplet_lambda)

        
        # Ensure we do not exceed the number of available beads
        if current_bead_index + num_beads > len(bead_statuses):
            num_beads = len(bead_statuses) - current_bead_index
        
        # Extract the bead statuses for this droplet
        droplet_beads_statuses = bead_statuses[current_bead_index:current_bead_index + num_beads]
        
        # Determine the droplet's status (True if any bead in the droplet is True)
        droplet_status = any(droplet_beads_statuses)
        
        # Append the droplet's status and the number of beads within
        droplet_statuses.append(droplet_status)
        droplet_bead_nums.append(num_beads)        
        
        # Move to the next set of beads
        current_bead_index += num_beads
    
    return droplet_statuses, droplet_bead_nums

# Define the lambda values for bead status, denser between 0.01 and 0.2
AEB_lambdas = np.concatenate((np.linspace(0.01, 0.2, 10), np.linspace(0.2, 2.0, 20)))
# Define the lambda values for bead encapsulation in droplets
beads_per_droplet_lambdas = np.concatenate((np.linspace(0.1, 0.5, 5), np.linspace(1.0, 3.0, 5)))

# Initialize a DataFrame to store the results
results_df = pd.DataFrame({'Lambda for Bead Status': AEB_lambdas})

# Initialize a plot
plt.figure(figsize=(4, 3))

for beads_lambda in beads_per_droplet_lambdas:
    true_counts = []

    for lambda_param in AEB_lambdas:
        # Generate bead statuses
        bead_statuses = generate_bead_enzyme_status(lambda_param=lambda_param)
        
        # Encapsulate beads into droplets and get the True-False status for each droplet
        droplet_statuses, droplet_bead_nums = encapsulate_beads_into_droplets(bead_statuses, beads_per_droplet_lambda=beads_lambda)
        
        true_counts.append(sum(droplet_statuses)/len([num for num in droplet_bead_nums if num != 0]))
    
    # Add this data to the plot    
    plt.plot(AEB_lambdas, true_counts, marker='o', label=f'{beads_lambda:.1f}')
    
    # Add the results to the DataFrame
    results_df[f'Droplet Lambda: {beads_lambda}'] = true_counts


# Customize the plot
plt.xlabel('Average enzymes per bead', fontsize=14)
plt.ylabel('Proportion of "on" Droplets', fontsize=14)
plt.title('Effect of average enzymes per bead on "on" Droplets', fontsize=16)
plt.legend(title="Average beads per droplet", title_fontsize=14, prop={'size': 12}, ncol=2)
plt.grid(True)
# Adjusting tick parameters for better readability
plt.xticks(fontsize=12)
plt.yticks(fontsize=12)
plt.show()

# Save the results to a CSV file
results_df.to_csv('droplet_true_counts.csv', index=False)
